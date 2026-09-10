---
layout: page
title: "pFedHALO: Communication-Efficient Personalized Federated Learning for Resource-Constrained AIoT"
description: M.S. Thesis · IEIE 2026 · extended version under review
img:
importance: 1
category: personal
---

**pFedHALO** is a personalized federated learning framework for AIoT systems, where clients hold heterogeneous data while operating under tight communication, energy, and compute budgets.

A server-side hypernetwork generates client-specific low-rank adapters conditioned on compact local data statistics, which each client uploads once at setup. The client fuses the generated adapter into a locally stored base model, refines it on its own data, and returns a compressed update — so personalization is produced on the server while the client side stays lightweight in both communication and computation. Because the conditioning depends only on aggregate statistics rather than a learned per-client embedding, the trained hypernetwork can also personalize clients it has never seen before.

**Publication track**

- M.S. Thesis, Yonsei University (2026)
- 대한전자공학회 학술대회, IEIE (Jun. 2026, to appear)
- Extended version currently under review — venue and paper title withheld while review is in progress

---

**pFedHALO**는 통신·연산 자원이 제한된 AIoT 환경을 위한 개인화 연합학습 프레임워크입니다.

서버의 하이퍼네트워크가 클라이언트의 간략한 데이터 통계를 조건으로 클라이언트별 저랭크 어댑터를 생성하고, 클라이언트는 이를 로컬 베이스 모델에 융합해 자신의 데이터로 미세조정한 뒤 압축된 업데이트를 되돌려 보냅니다. 개인화 생성을 서버 쪽으로 옮겨 클라이언트의 통신량과 연산량을 모두 낮게 유지하는 구조입니다. 또한 클라이언트별 학습 임베딩이 아니라 집계 통계만을 조건으로 쓰기 때문에, 학습된 하이퍼네트워크는 학습에 참여하지 않은 새 클라이언트도 개인화할 수 있습니다.

확장 버전은 현재 심사 중이며, 심사가 진행되는 동안 논문 제목과 투고 학회는 공개하지 않습니다.
