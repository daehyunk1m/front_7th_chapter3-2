# 참고 자료

## 핵심 개념

### 엔티티 분류 기준

- 엔티티를 다루는 상태 vs 그렇지 않은 상태: `cart`, `isCartFull` vs `isShowPopup`
- 엔티티를 다루는 컴포넌트와 훅: `CartItemView`, `useCart()`, `useProduct()`
- 엔티티를 다루지 않는 컴포넌트와 훅: `Button`, `useRoute`, `useEvent`
- 엔티티를 다루는 함수 vs 그렇지 않은 함수: `calculateCartTotal(cart)` vs `capitalize(str)`

### 계층 구조

```
entities -> features -> UI
```

## 파일

- `src/origin/App.tsx` - 원본 코드 (안티패턴, 참고용)
- `src/refactoring(hint)/` - 리팩토링 힌트 및 템플릿
- `src/types.ts` - 공통 타입 정의
- `.github/pull_request_template.md` - 과제 요구사항 체크리스트

## 테스트

- `src/basic/__tests__/origin.test.tsx` - 기본과제 테스트
- `src/advanced/__tests__/origin.test.tsx` - 심화과제 테스트

## 명령어

```bash
pnpm test:basic      # 기본과제 테스트
pnpm test:advanced   # 심화과제 테스트
pnpm dev:basic       # 기본과제 개발 서버
pnpm dev:advanced    # 심화과제 개발 서버
```

---

**마지막 업데이트**: 2025-12-01
