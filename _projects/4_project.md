---
layout: page
title: pFedHALO
description: Personalized federated learning for resource-constrained AIoT · M.S. Thesis · IEIE 2026 · extended version under review
img:
importance: 1
category: personal
---

**pFedHALO** is a personalized federated learning framework for AIoT systems, where clients hold heterogeneous data while operating under tight communication, energy, and compute budgets.

A server-side hypernetwork generates client-specific low-rank adapters conditioned on compact local data statistics, which each client uploads once at setup. The client fuses the generated adapter into a locally stored base model, refines it on its own data, and returns a compressed update — so personalization is produced on the server while the client side stays lightweight in both communication and computation. Because the conditioning depends only on aggregate statistics rather than a learned per-client embedding, the trained hypernetwork can also personalize clients it has never seen before.

**Publication track**

- M.S. Thesis, Yonsei University (2026)
- 대한전자공학회 학술대회, IEIE (Jun. 2026)
- Extended version currently under review — venue and paper title withheld while review is in progress

---

## 한국어 요약

**pFedHALO** — 자원 제약 AIoT 환경을 위한 개인화 연합학습 프레임워크

- **문제**: AIoT 클라이언트마다 사용자·센서·환경이 달라 데이터 분포가 이질적. 대역폭·전력·메모리·연산은 모두 제약. 단일 글로벌 모델은 클라이언트별 성능이 불균일하고, 개인화를 위해 밀집 모델을 매 라운드 교환하면 통신 비용이 시스템 비용을 지배
- **접근**: 개인화 모델 생성을 서버로 이전. 서버 하이퍼네트워크가 클라이언트의 간략한 데이터 통계를 조건으로 클라이언트별 저랭크 어댑터를 생성
- **클라이언트 동작**: 생성된 어댑터를 로컬 베이스 모델에 한 번 융합 → 자신의 데이터로 미세조정 → 압축된 업데이트만 업로드
- **효과**: 개인화 생성 부담이 서버에 있어 클라이언트의 통신량과 연산량을 동시에 절감
- **콜드 스타트**: 클라이언트별 학습 임베딩 대신 집계 통계만을 조건으로 사용. 학습된 하이퍼네트워크로 학습 미참여 클라이언트까지 개인화 가능
- **현황**: 석사학위논문(2026), 대한전자공학회 학술대회(2026) 발표 완료. 확장 버전 심사 중 — 심사 기간 중 논문 제목·투고 학회 비공개
