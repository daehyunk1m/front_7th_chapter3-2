# Agent Registry

## 활성 에이전트

| ID | 이름 | 상태 | 역할 |
|----|------|------|------|
| 01 | orchestrator | 활성 | 전체 조율 |
| 02 | feature-designer | 대기 | 기능 설계 |
| 03 | test-writer | 대기 | 테스트 작성 |
| 04 | code-writer | 활성 | 코드 구현 |
| 05 | reviewer | 활성 | 코드 리뷰 |

## 명령어

- `@agent activate [id]` - 에이전트 활성화
- `@agent deactivate [id]` - 에이전트 비활성화
- `@agent list` - 목록 확인
