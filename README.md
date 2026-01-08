## 🚀 프로젝트 실행 환경 (Execution Environment)

본 프로젝트는 **React + Vite 기반 웹 서비스**입니다.

## ▶️ 프로젝트 실행 방법 (How to Run)

프로젝트를 실행하기 위한 전체 과정은 아래와 같습니다.

### 1) 패키지 설치

`npm install`

### 2) 개발 서버 실행

`npm run dev`

### 3) 브라우저에서 확인

`http://localhost:5173`

## 🤝 협업 규칙

### 🌐 Git-flow

> - **main**: 프로젝트가 최종적으로 배포되는 브랜치
> - **develop**: 다음 출시 버전을 개발하는 브랜치
> - **feature/design/…**: 기능을 개발하는 브랜치
>   <br>

### 📌 Git branch 규칙

> 1. **개인 작업은 꼭 feature/design/… 브랜치에서 하기**
> 2. **모든 작업 시작 전 develop에서 pull을 받은 후, feature/design/… 브랜치에서 작업 시작**
> 3. **개인 작업 마치면 feature/design/… 브랜치로 pull request를 통해 develop에 merge하기**
> 4. **프로젝트 완료 후 main으로 merge (팀장님이 한번에 진행 예정)**
>    <br>

### 📝 feature/design/… branch

> 1. **브랜치명은 아래의 형식으로 작성합니다. (feature/이름-기능제목#이슈번호)**
>    - 팀원 ysh2002m의 브랜치명: `feature/ysh2002m-login#1`
> 2. **Feature branch -> develop branch로 merge하기 전 PR에서 reviewers 설정하여 팀원 2명 이상에게 approve 받기**
> 3. **PR 후 팀원들에게 공지하기**
>    <br>

### 🎯 Commit Convention

> 1. **커밋 메시지의 형식은 통일해 주세요.**
> 2. **예시: 🎨 Design: 푸터에 맞게 디자인 수정**
> 3. **깃모지를 사용해 주세요.**
>
> <li> 🎉 Start: Start New Project [:tada]
> <li> ✨ Feat: 새로운 기능을 추가 [:sparkles]
> <li> 🐛 Fix: 버그 수정 [:bug]
> <li> 🎨 Design: CSS 등 사용자 UI 디자인 변경 [:art]
> <li> ♻️ Refactor: 코드 리팩토링 [:recycle]
> <li> 🔧 Settings: Changing configuration files [:wrench]
> <li> 🗃️ Comment: 필요한 주석 추가 및 변경 [:card_file_box]
> <li> ➕ Dependency/Plugin: Add a dependency/plugin [:heavy_plus_sign]
> <li> 📝 Docs: 문서 수정 [:memo]
> <li> 🔀 Merge: Merge branches [:twisted_rightwards_arrows:]
> <li> 🚀 Deploy: Deploying stuff [:rocket]
> <li> 🚚 Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck]
> <li> 🔥 Remove: 파일을 삭제하는 작업만 수행한 경우 [:fire]
> <li> ⏪️ Revert: 전 버전으로 롤백 [:rewind]
