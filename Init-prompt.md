# Claude Code 초기화 프롬프트

> `claude init` 실행 후 CLAUDE.md가 생성된 시점에서 아래 프롬프트를 입력하세요.

---

## 🚀 기본 초기화 프롬프트

```
@setup

프로젝트 루트에 있는 SETTING.md 파일을 읽고 다음을 수행해줘:

1. SETTING.md의 "폴더 구조" 섹션에 따라 .claude/ 하위 폴더 구조를 생성해줘
2. 필요한 기본 파일들을 생성해줘:
   - .claude/agents/_registry.md
   - .claude/state/progress.json
   - .claude/state/goals.md
   - .claude/state/references.md
3. 생성이 완료되면 나에게 다음 정보를 물어봐:
   - 프로젝트 목표
   - 세부 태스크 (선택)
   - 참고 자료 (선택)
   - 기술 스택
   - 활성화할 에이전트
4. 내가 입력한 정보를 바탕으로 goals.md와 references.md를 업데이트해줘
5. CLAUDE.md를 SETTING.md의 템플릿에 맞게 업데이트해줘
6. 마지막으로 .claude/state/logs/phase-0.md에 초기화 로그를 작성해줘
```

---

## 🎯 목표와 레퍼런스를 미리 알고 있는 경우

```
@setup

프로젝트 루트에 있는 SETTING.md 파일을 읽고 초기화를 진행해줘.

## 프로젝트 정보

**목표**: [여기에 최종 목표 작성]

**세부 태스크**:
- [ ] [태스크 1]
- [ ] [태스크 2]
- [ ] [태스크 3]

**참고 자료**:
- [문서/링크/파일 경로]
- [문서/링크/파일 경로]

**기술 스택**: [예: Next.js 14, TypeScript, Tailwind, Supabase]

**활성화할 에이전트**:
- orchestrator (필수)
- [추가 에이전트]

---

위 정보를 바탕으로:
1. .claude/ 폴더 구조 생성
2. goals.md, references.md 작성
3. _registry.md에 에이전트 등록
4. CLAUDE.md 업데이트
5. progress.json 초기화
6. phase-0.md 로그 작성

완료 후 첫 번째 페이즈를 안내해줘.
```

---

## 🔄 기존 프로젝트에 시스템 추가하는 경우

```
@setup --existing

이 프로젝트는 이미 진행 중인 프로젝트야. SETTING.md를 읽고 에이전트 시스템을 추가해줘.

**현재 상태**:
- [현재까지 완료된 작업 설명]
- [남은 작업 설명]

**목표**: [프로젝트 목표]

**기술 스택**: [현재 사용 중인 스택]

---

다음을 수행해줘:
1. .claude/ 폴더 구조 생성 (기존 파일 건드리지 않음)
2. 현재 상태를 반영하여 progress.json 설정
3. goals.md에 목표와 남은 태스크 기록
4. CLAUDE.md에 에이전트 시스템 섹션 추가
5. 현재 페이즈부터 시작할 수 있도록 설정
```

---

## 🤖 특정 에이전트만 활성화하는 경우

### TDD 워크플로우용

```
@setup --tdd

SETTING.md를 읽고 TDD 워크플로우에 맞는 에이전트 시스템을 구성해줘.

**목표**: [프로젝트 목표]
**기술 스택**: [스택]

**활성화할 에이전트**:
- orchestrator
- test-designer
- test-writer
- code-writer
- reviewer

각 에이전트 정의 파일(.claude/agents/[name].md)도 TDD 원칙에 맞게 생성해줘:
- test-designer: 테스트 케이스 설계
- test-writer: 테스트 코드 작성 (구현 전)
- code-writer: 테스트 통과하는 코드 작성
- reviewer: 리팩토링 및 품질 검토
```

### 단순 구현용

```
@setup --simple

SETTING.md를 읽고 최소한의 에이전트로 구성해줘.

**목표**: [프로젝트 목표]
**기술 스택**: [스택]

**활성화할 에이전트**:
- orchestrator
- code-writer

빠른 구현에 집중하는 설정으로 해줘.
```

---

## 📋 프롬프트 사용 예시

### 예시 1: 할 일 관리 앱

```
@setup

프로젝트 루트에 있는 SETTING.md 파일을 읽고 초기화를 진행해줘.

## 프로젝트 정보

**목표**: Next.js 기반 할 일 관리 앱 완성

**세부 태스크**:
- [ ] 사용자 인증 (Supabase Auth)
- [ ] 할 일 CRUD API
- [ ] 드래그 앤 드롭 UI
- [ ] 다크모드 지원
- [ ] Vercel 배포

**참고 자료**:
- design.figma (Figma 디자인)
- https://supabase.com/docs/guides/auth
- PRD.md (기획 문서)

**기술 스택**: Next.js 14, TypeScript, Tailwind, shadcn/ui, Supabase

**활성화할 에이전트**:
- orchestrator
- feature-designer
- code-writer
- reviewer

---

위 정보를 바탕으로 전체 초기화를 진행하고, 첫 번째 페이즈를 안내해줘.
```

### 예시 2: API 서버

```
@setup

프로젝트 루트에 있는 SETTING.md 파일을 읽고 초기화를 진행해줘.

## 프로젝트 정보

**목표**: Express.js REST API 서버 구축

**세부 태스크**:
- [ ] 프로젝트 구조 설계
- [ ] 인증 미들웨어
- [ ] 사용자 API
- [ ] 상품 API
- [ ] 테스트 작성

**참고 자료**:
- api-spec.yaml (OpenAPI 스펙)
- erd.md (DB 설계)

**기술 스택**: Node.js, Express, TypeScript, Prisma, PostgreSQL, Jest

**활성화할 에이전트**:
- orchestrator
- test-writer
- code-writer

---

TDD 방식으로 진행할 거야. 초기화 후 첫 페이즈를 안내해줘.
```

---

## ⚡ 초기화 후 사용할 수 있는 명령어

초기화가 완료되면 다음 명령어들을 사용할 수 있어요:

| 명령어                   | 설명                |
| ------------------------ | ------------------- |
| `@status`                | 현재 진행 상황 확인 |
| `@goal [새 목표]`        | 목표 업데이트       |
| `@agent list`            | 에이전트 목록       |
| `@agent activate [id]`   | 에이전트 활성화     |
| `@agent deactivate [id]` | 에이전트 비활성화   |
| `@phase next`            | 다음 페이즈로 이동  |
| `@phase current`         | 현재 페이즈 상세    |
| `@log`                   | 최근 로그 확인      |
| `@reset`                 | 전체 상태 초기화    |

---

## 🔧 문제 해결

### SETTING.md를 못 찾는 경우

```
프로젝트 루트에 SETTING.md 파일이 있어. 이 파일을 읽고 @setup 프로세스를 진행해줘.

파일 경로: ./SETTING.md
```

### 기존 .claude 폴더가 있는 경우

```
@setup --force

기존 .claude/ 폴더를 백업하고 새로 초기화해줘.
백업 위치: .claude.backup/
```

### 초기화 중단 후 재개

```
@setup --resume

이전 초기화가 중단됐어. .claude/state/progress.json을 확인하고 이어서 진행해줘.
```
