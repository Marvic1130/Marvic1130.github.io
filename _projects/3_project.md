---
layout: page
title: Blockage-Aware UAV Positioning
description: Deep learning-based aerial base station placement with embedded validation · IEEE TVT (under review)
img:
importance: 1
category: personal
toc:
  sidebar: left
---

_Deep Learning-based UAV Positioning under Blockage-Aware Channels with Embedded Validation_ — Yeseong Kang and Woongsup Lee, under review at **IEEE Transactions on Vehicular Technology**.

Where should a UAV-mounted aerial base station (ABS) hover to serve ground users best, when buildings keep cutting the links? This work answers that with a deep neural network that runs on the drone itself, in under a millisecond.

## Problem

A UAV-mounted ABS serves $$K$$ ground users scattered across an urban area, and the goal is to place it so that their **average spectral efficiency (SE)** is maximized. What makes this hard is the channel model: rather than assuming a statistical line-of-sight probability, we use a geometry-based **blockage-aware** air-to-ground model that checks whether each ABS–user link actually intersects a building.

That realism comes at a cost. Link classification switches discretely between LoS and NLoS, so the objective is non-smooth and generally non-differentiable in the ABS position — gradient-based solvers do not apply. Exhaustive blockage-aware grid search does solve it, but its cost grows with grid density and obstacle count, which rules it out for an onboard processor.

## Approach

**Placement by a single forward pass.** A tailored MLP takes the min–max normalized ground-user coordinates and outputs the ABS's horizontal position. A sigmoid followed by an affine map into the deployment area means the predicted coordinates satisfy the region constraints _by construction_ — no projection or post-processing step. The network is an input projection to 1,024 dimensions, four fully connected hidden layers of 1,024 units with batch normalization, PReLU, and dropout, then a 2D output.

**Training without labels.** Optimal placements cannot be labeled at scale under this channel model, so training is unsupervised against the objective itself: the loss is the negative average SE. To make that loss differentiable, the hard LoS/NLoS switch is replaced by a smooth two-state mixture weighted by a soft LoS factor

$$\eta_k = \tanh(\lambda \tilde{d}_k),$$

where $$\tilde{d}_k$$ is the minimum distance from the ABS–user link to obstacle surfaces, approximated by sampling $$Q$$ points per obstacle. Larger clearance pushes the mixture toward the LoS path-loss exponent, and blocked links toward the NLoS one.

**Offline–online separation.** The surrogate channel model and obstacle-distance computation exist only for training. At deployment the network emits a placement from one forward pass, with no surrogate evaluation and no geometry queries — which is what makes onboard inference cheap.

## Results

Evaluated on a 200 × 200 m² urban site with seven obstacles (six cuboidal buildings, one cylinder) at heights of 10–70 m, against three baselines: blockage-aware grid search at 0.1 m resolution (a near-upper-bound reference), centroid-based placement, and probabilistic LoS-based sampling.

| Ground users ($$H$$ = 70 m) | Grid search | Centroid | Prob. LoS | **Ours** |
| --------------------------- | ----------- | -------- | --------- | -------- |
| $$K$$ = 2                   | 6.43        | 5.52     | 5.84      | **6.39** |
| $$K$$ = 4                   | 5.80        | 4.93     | 5.31      | **5.70** |
| $$K$$ = 6                   | 5.53        | 4.71     | 5.12      | **5.41** |

_Average SE in bps/Hz._

The proposed network stays within **0.6–2.2%** of exhaustive grid search across the tested user counts, and within 1.3–2.0% across altitudes — at least 97.8% of the reference. Centroid placement, which ignores geometry entirely, gives up 14–15%; probabilistic LoS sampling lands 7–9% short. SE heatmaps show why the small gap holds even when the two placements are far apart: the network often picks a different near-optimal basin rather than a worse one.

## Embedded validation

The point of a lightweight model is that it runs where the UAV is, so the inference pipeline was benchmarked on five single-board computers across PyTorch, TensorFlow Lite, and TensorRT.

| Device                  | Best latency | Runtime     | PyTorch (FP32) |
| ----------------------- | ------------ | ----------- | -------------- |
| Raspberry Pi 5          | **0.24 ms**  | TFLite INT8 | 9.02 ms        |
| Jetson Orin Nano (MaxN) | **0.27 ms**  | TFLite INT8 | 1.71 ms        |
| Raspberry Pi 4          | 1.04 ms      | TFLite INT8 | 18.20 ms       |
| Arduino Portenta X8     | 2.47 ms      | TFLite INT8 | 19.12 ms       |
| Jetson Nano (MaxN)      | 1.10 ms      | TensorRT    | 3.24 ms        |

Every platform reaches millisecond-level latency, including the CPU-only boards. Quantization costs almost nothing in solution quality — the largest SE deviation from FP32 was $$1.415 \times 10^{-3}$$ bps/Hz, or **0.0182%**, with TFLite INT8.

Power modes expose a clearer trade-off than latency alone. Capping the Orin Nano at 7.5 W stretches PyTorch from 1.71 ms to 5.39 ms, while TensorRT on the Jetson Nano moves only from 1.10 ms to 1.46 ms: optimized runtimes absorb a power cap that general-purpose ones do not. Per inference, that works out to roughly 4 mJ for TensorRT on the Jetson Nano against 16 mJ for PyTorch on the Orin Nano in MaxN — rising to 45 mJ once the power cap is applied.

## Scope

The study deliberately fixes several dimensions to isolate blockage-aware horizontal placement: one UAV, fixed altitude, quasi-static users within a single decision epoch, and obstacle geometry that is known and unchanged for the target site. The trained model therefore generalizes over user layouts at a given site rather than across unseen obstacle maps. Joint altitude and trajectory optimization, multi-UAV coordination, and strongly time-varying users are left to future work.

---

## 한국어 요약

**Blockage-Aware UAV Positioning** — 건물 차폐를 반영한 UAV 공중기지국 배치의 딥러닝 최적화 및 임베디드 검증

- **문제**: 도심에 무작위 분포한 지상 사용자의 평균 스펙트럼 효율(SE)을 최대화하는 UAV 공중기지국(ABS) 수평 위치 결정. 통계적 LoS 확률 대신 건물 형상을 직접 반영한 **차폐 인식 A2G 채널 모델** 사용
- **난점**: LoS/NLoS가 이산적으로 전환되어 목적함수가 비평활·미분 불가. 경사 기반 해법 적용 불가, 전수 격자 탐색은 기체 탑재 연산으로 감당 불가
- **접근**: 지상 사용자 좌표를 입력받아 ABS 위치를 출력하는 MLP. 시그모이드 후 어파인 사상으로 배치 영역 제약을 구조적으로 만족 — 사영이나 후처리 불필요
- **학습**: 최적 배치 라벨 생성이 불가하므로 목적함수 자체를 손실로 쓰는 비지도 학습. 하드 전환을 $$\eta_k=\tanh(\lambda\tilde d_k)$$ 가중 2상태 혼합으로 대체해 미분 가능한 대리 모델 구성
- **오프라인·온라인 분리**: 대리 채널 모델과 장애물 거리 계산은 학습에만 사용. 배치 시에는 단일 순전파만 수행
- **성능**: 전수 격자 탐색 대비 SE 격차 0.6–2.2%(기준 성능의 97.8% 이상). 중심점 배치는 14–15%, 확률적 LoS 표집은 7–9% 열세
- **임베디드 검증**: Raspberry Pi 4/5, Jetson Nano/Orin Nano, Arduino Portenta X8 5종에서 밀리초급 추론. 최속 0.24 ms(Pi 5, TFLite INT8), 양자화로 인한 SE 편차 최대 0.0182%
- **전력 특성**: 전력 상한 적용 시 TensorRT는 지연 변동 경미, PyTorch는 큰 둔화 — 최적화 런타임이 제약 환경에 강건
- **범위**: 단일 UAV·고정 고도·준정적 사용자·기지 장애물 형상 가정. 특정 현장에 대한 사용자 배치 일반화이며 미지 장애물 지도로의 일반화는 대상 외
- **현황**: IEEE Transactions on Vehicular Technology 심사 중
