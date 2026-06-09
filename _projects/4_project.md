---
layout: page
title: "pFedHALO: Communication-Efficient Personalized Federated Learning for Resource-Constrained AIoT"
description: M.S. Thesis · IEIE 2026 · AAAI 2027 (planned)
img:
importance: 1
category: personal
toc:
  sidebar: left
---

**pFedHALO** proposes a communication-efficient personalized federated learning framework for resource-constrained AIoT environments. A server-side hypernetwork generates client-specific low-rank adapters conditioned on lightweight data statistics, which are fused once into a locally stored base model. Uplink communication is compressed via low-rank decomposition of weight deltas, reducing bidirectional communication by 53.4%–96.0% over full-model exchange while achieving competitive personalization accuracy.

**Publication track:**
- M.S. Thesis, Yonsei University (2026)
- 대한전자공학회 학술대회, IEIE (Jun. 2026, To Appear)
- AAAI 2027 (planned)

---

## 1. Motivation

As AI moves into the physical world through **AIoT**, devices like SBCs and MCUs need to run intelligent models locally — without sending raw data to the cloud. Federated Learning (FL) offers a natural solution: devices collaborate by sharing model updates rather than raw data.

However, standard FL has two major problems in AIoT settings:

1. **Communication overhead**: Exchanging full model weights every round is expensive on bandwidth-limited wireless channels.
2. **Non-IID data**: Each device has its own data distribution, making a single global model suboptimal.

Personalized FL (pFL) addresses the second issue, but existing methods (e.g., pFedHN, FedALA) still suffer from high communication costs. pFedHALO tackles both simultaneously.

---

## 2. System Model

Consider a federated system with one server and $$N$$ clients. Client $$n$$ holds a local dataset $$\mathcal{D}_n$$ with $$D_n$$ samples. Data distributions are Non-IID:

$$P_n(\mathbf{x}, y) \ne P_{n'}(\mathbf{x}, y), \quad \forall n \ne n'$$

The global learning objective is:

$$\min\; \mathcal{L} = \sum_{n \in \mathcal{N}} \frac{D_n}{D}\, \mathcal{L}_n(\mathbf{W}_n)$$

Each round, the server selects a subset $$\mathcal{S}_t$$ of clients. A key constraint in AIoT is the **uplink communication budget** $$U^{\max}$$:

$$U_n^t \le U^{\max}, \quad n \in \mathcal{S}_t$$

---

## 3. Method

{% include figure.liquid path="assets/img/projects/pfedhalo/pfedhalo_overview.png" title="pFedHALO Overview" class="img-fluid rounded z-depth-1" %}
<div class="caption">pFedHALO overview</div>

pFedHALO's workflow per round:

1. Each client registers a **data statistics summary** $$\mathbf{e}_n$$ once at the start.
2. The server generates **client-specific low-rank adapters** via a hypernetwork.
3. Each client **fuses** the adapter into the base model and runs local training.
4. The client uploads **low-rank compressed weight deltas** to the server.
5. The server updates the **hypernetwork** via meta-gradient.

### 3.1 Data Statistics Summary

Each client computes a fixed-dimension summary vector $$\mathbf{e}_n \in \mathbb{R}^{d_e}$$ once:

$$\mathbf{e}_n = \bigl[\,\mathrm{Proj}_{d_{\bar{x}}}(\bar{\mathbf{x}}_n);\; \mathrm{Proj}_{d_s}(\mathbf{s}_n);\; \mathrm{Proj}_{d_\pi}(\boldsymbol{\pi}_n)\,\bigr]$$

where $$\bar{\mathbf{x}}_n$$ is the input mean, $$\mathbf{s}_n$$ the standard deviation, and $$\boldsymbol{\pi}_n$$ the normalized label distribution, each projected via adaptive average pooling.

### 3.2 Hypernetwork-Based Adapter Generation

The server-side hypernetwork $$G_{\boldsymbol{\omega}}$$ maps $$\mathbf{e}_n$$ to per-layer low-rank adapter factors:

$$({\mathbf{A}}_{\ell,n},\, {\mathbf{B}}_{\ell,n},\, \alpha_{\ell,n}) = G_{\boldsymbol{\omega}}(\mathbf{e}_n)$$

Outputs are bounded for stability: $$[\mathbf{A}_{\ell,n}]_{ij},\, [\mathbf{B}_{\ell,n}]_{ij} \in [-1, 1]$$ and $$\alpha_{\ell,n} = r \cdot \sigma(t_{\ell,n}) \in [0, r]$$. Downlink cost per layer is $$\mathcal{O}(r(d_{\mathrm{out},\ell} + d_{\mathrm{in},\ell}))$$.

### 3.3 Weight Fusion and Local Training

Each client fuses the adapter into the base model **once** per round:

$$\mathbf{W}_{\ell,n}^{\prime(\text{init})} = \mathbf{W}^{\mathrm{base}}_\ell + \frac{\alpha_{\ell,n}}{r}\mathbf{B}_{\ell,n}\mathbf{A}_{\ell,n}$$

The base model is transmitted only once at the start — no repeated full-model downlink per round.

### 3.4 Low-Rank Uplink Compression and Meta-Update

After local training, the weight delta is compressed via rank-$$r$$ truncated SVD and uploaded. Uplink cost per layer: $$\mathcal{O}(r(d_{\mathrm{out},\ell} + d_{\mathrm{in},\ell}))$$.

The server computes the meta-gradient:

$$\mathbf{g}_t = \sum_{n \in \mathcal{S}_t} \frac{D_n}{D_{\mathcal{S}_t}} \left[ \sum_{\ell \in \Lambda} \left( \frac{\partial \mathrm{vec}(\mathbf{W}_{\ell,n}^{\prime(\text{init})})}{\partial \boldsymbol{\omega}} \right)^{\!\top} \mathrm{vec}(\tilde{\boldsymbol{\Gamma}}_{\ell,n}) \right]$$

---

## 4. Results

### Personalization Accuracy (%)

| Dataset   | FedAvg | FedALA     | pFedHN | $$r=32$$ | $$r=64$$  | $$r=128$$  |
|-----------|--------|------------|--------|----------|-----------|------------|
| FEMNIST   | 80.94  | 81.16      | 86.37  | 87.71    | **88.12** | 87.26      |
| CIFAR-10  | 62.58  | **91.22**  | 78.65  | 90.86    | 91.15     | 91.10      |
| CIFAR-100 | 33.50  | 58.60      | 42.50  | 54.42    | 58.37     | **58.93**  |

### Communication Reduction

| Dataset   | Baseline (MB) | $$r=32$$ | $$r=64$$ | $$r=128$$ | Reduction ($$r=32$$) |
|-----------|--------------|----------|----------|-----------|----------------------|
| FEMNIST   | 50.38        | 2.00     | 3.99     | 7.26      | **96.0%**            |
| CIFAR-10  | 6.70         | 0.84     | 1.64     | 3.04      | **87.5%**            |
| CIFAR-100 | 7.06         | 0.90     | 1.79     | 3.29      | **87.3%**            |

### Cold-Start Personalization

For unseen clients (zero-shot), pFedHALO achieves **84.89%** accuracy on FEMNIST using only data statistics — with a gap to in-distribution clients of only 3.2–4.4%p (vs. pFedHN's 9.7%p).

{% include figure.liquid path="assets/img/projects/pfedhalo/cold_start_femnist.png" title="Cold-Start Accuracy" class="img-fluid rounded z-depth-1" %}
<div class="caption">Zero-shot cold-start accuracy comparison on FEMNIST (100 unseen writers).</div>

---

## 5. Takeaways

- **Rank tradeoff**: $$r=64$$ offers the best accuracy-communication balance; $$r=32$$ is best under strict bandwidth constraints.
- **No pretrained model required**: Unlike LoRA-based FL methods, pFedHALO trains from scratch.
- **Scalable to new devices**: Cold-start via data statistics makes deployment to unseen clients practical.

---

*Supported by NRF (RS-2024-00449555) and IITP (RS-2024-00397085).*
