## 🛍️ CreatiPick (크리에이픽)
크리에이터와 팬을 잇는 큐레이션 커머스 플랫폼 > "누가 추천했는가"가 기준이 되는 새로운 쇼핑 경험

## 📖 프로젝트 소개 (About Project)
CreatiPick은 크리에이터의 추천 정보를 기반으로 사용자에게 최적의 제품을 안내하는 제휴 마케팅 기반의 연결형 플랫폼입니다.유튜브나 인스타그램 등 여러 플랫폼에 흩어져 있는 인플루언서의 추천 아이템(공구 정보)을 한곳에 모아, 팬들에게는 편리한 쇼핑 경험을, 크리에이터에게는 새로운 소통 창구를 제공합니다.

* For Fans: 탐색 시간 절약, 실패 없는 쇼핑, 새로운 제품 발견

* For Creators: 팬들과의 신뢰 형성, 자연스러운 수익 창출 모델

  
## 👥 팀원 및 역할 (Team 연혁민혁) 
| 이름 | 역할 | 담당 파트 |
| :---: | :---: | :--- |
| 정연우 | 팀장 | HOME: 메인 페이지, 커스텀 슬라이더, 트렌드 랭킹 UI |
| 윤상혁 | 팀원 | SEARCH: 검색 로직, 카테고리 필터링, 검색 모드 자동 전환 |
| 채민수 | 팀원 | CREATOR: 크리에이터 상세, 추천 상품 데이터 그룹핑(Grouping) |
| 이재혁 | 팀원 | DETAIL: 상품 상세, 리뷰(CRUD), 찜하기/공유하기, 평점 계산 |

## 🛠️ 기술 스택 (Tech Stack) 
* Environment

* Frontend

* Assets & Icons

## 💡 주요 기능 및 구현 포인트 (Key Features)
### 1. 홈 (Home)

* Custom Slider: 외부 라이브러리(Swiper 등) 없이 useState와 CSS transform을 활용하여 가로 스크롤 슬라이더를 직접 구현, 최적화된 성능 제공. 

* Trend UI: 공동 구매 진행 중인 제품과 인기 크리에이터 랭킹을 시각적으로 배치. 

### 2. 검색 및 필터링 (Search)

* Dynamic Filtering: useMemo를 활용하여 검색어 입력 시 실시간으로 데이터를 필터링. 

* Smart Categorization: 크리에이터 이름뿐만 아니라 카테고리 배열(['뷰티', '테크'])까지 탐색하여 정확도 높은 결과 반환. 

* Auto Mode Switching: 검색 결과 타입(인물 vs 상품)에 따라 UI 뷰가 자동으로 전환. 

### 3. 크리에이터 상세 (Creator Detail)

* Dynamic Routing: URL 파라미터(/:id)를 통해 크리에이터 정보를 동적으로 맵핑. 

* Data Grouping: 해당 크리에이터가 추천한 상품들을 카테고리별로 자동 분류하여 렌더링하는 로직 구현. 

### 4. 상품 상세 (Product Detail)

* Data Persistence (핵심): 백엔드 없이 LocalStorage를 활용하여 리뷰 작성 및 찜하기 상태가 새로고침 후에도 유지되도록 구현. 

* Real-time Calculation: 리뷰 작성 시 reduce 함수가 작동하여 평균 별점과 리뷰 개수를 즉시 재계산 및 UI 반영. 

* Safety Guard: 데이터 손상 시 자동으로 초기 목데이터(Mock Data)로 복구하여 런타임 에러 방지. 

* Link-out: '구매하기' 버튼 클릭 시 실제 판매처로 연결 (Affiliate 모델).

## 📂 폴더 구조 (Directory Structure)
```
src/
├── components/        # 공통 컴포넌트 (SearchBar 등)
├── mocks/             # Mock Data (creators, products, reviews)
├── pages/
│   ├── Home/          # 메인 페이지 및 슬라이더 로직
│   ├── Search/        # 검색 및 필터링 로직
│   ├── Creator/       # 크리에이터 상세 페이지
│   └── Detail/        # 상품 상세 및 리뷰 로직
├── routes/            # React Router 설정
└── styles/            # Global Styles
```

## 🚀 설치 및 실행 (Getting Started)이 프로젝트는 Vite 기반으로 만들어졌습니다.
### 1. 저장소 클론
git clone https://github.com/your-repo/creatipick.git

### 2. 패키지 설치
npm install

### 3. 개발 서버 실행
npm run dev

## 📝 프로젝트 후기 (Retrospective) 
* Architecture: 백엔드 API가 없는 환경에서 관계형 데이터(User-Product-Review)를 구조화하고, LocalStorage를 활용해 데이터 영속성을 구현하는 방법을 익혔습니다.

* Optimization: useMemo, useEffect 등 React Hooks의 동작 원리를 이해하고, 불필요한 렌더링을 방지하는 최적화 작업을 수행했습니다.

* Collaboration: 팀원들과 함께 컴포넌트 구조를 설계하고 Git을 통한 협업 프로세스를 경험했습니다.

© 2025 Team 연혁민혁. All Rights Reserved.
