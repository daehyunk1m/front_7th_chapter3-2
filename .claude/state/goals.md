# 프로젝트 목표

## 최종 목표

테스트 코드의 Input과 Output을 보면서 hook과 function을 작성하여, React의 적절한 책임 계층(Component, hook, function)을 이해하고 분리하는 것

## 기본과제 (basic)

상태관리 없이 비즈니스 로직을 분리하고 테스트 코드 통과

### 세부 태스크

- [ ] cart, product에 대한 계산 함수 분리
  - [ ] calculateItemTotal
  - [ ] getMaxApplicableDiscount
  - [ ] calculateCartTotal
  - [ ] updateCartItemQuantity
- [ ] 상태를 다루는 hook, 유틸리티 hook 분리
  - [ ] useCart
  - [ ] useCoupon
  - [ ] useProduct
  - [ ] useLocalStorage
- [ ] 엔티티 컴포넌트와 UI 컴포넌트 분리
  - [ ] ProductCard
  - [ ] Cart
  - [ ] 기타 필요 컴포넌트
- [ ] 테스트 코드 통과 (`pnpm test:basic`)

### 체크리스트

- [ ] Component에서 사용되는 Data가 아닌 로직들은 hook으로 옮겨졌나요?
- [ ] 주어진 hook의 책임에 맞도록 코드가 분리가 되었나요?
- [ ] 계산함수는 순수함수로 작성이 되었나요?
- [ ] 특정 Entity만 다루는 함수는 분리되어 있나요?
- [ ] 특정 Entity만 다루는 Component와 UI를 다루는 Component는 분리되어 있나요?
- [ ] 데이터 흐름에 맞는 계층구조를 이루고 의존성이 맞게 작성이 되었나요?

## 심화과제 (advanced)

Context 또는 Jotai를 사용해서 Props drilling 제거

### 세부 태스크

- [ ] Context 또는 Jotai 중 하나 선택
- [ ] 전역상태관리 구축
- [ ] domain custom hook 리팩토링
- [ ] 불필요한 props drilling 제거
- [ ] 테스트 코드 통과 (`pnpm test:advanced`)

### 체크리스트

- [ ] Context나 Jotai를 사용해서 전역상태관리를 구축했나요?
- [ ] 전역상태관리를 통해 domain custom hook을 적절하게 리팩토링 했나요?
- [ ] 도메인 컴포넌트에 도메인 props는 남기고 props drilling을 유발하는 불필요한 props는 잘 제거했나요?
- [ ] 전체적으로 분리와 재조립이 더 수월해진 결합도가 낮아진 코드가 되었나요?

## 성공 기준

- `pnpm test:basic` 모든 테스트 통과
- `pnpm test:advanced` 모든 테스트 통과
- 코드 리뷰 체크리스트 모든 항목 충족

---

**생성일**: 2025-12-01
**마지막 수정**: 2025-12-01
