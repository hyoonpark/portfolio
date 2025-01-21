# Portfolio Website PRD

## 1. 프로젝트 개요
이 프로젝트는 백엔드 주니어 개발자의 포트폴리오 웹사이트로, 개발자의 소개 및 기술 스택, 프로젝트 경험 등을 효과적으로 전달하는 것을 목표로 합니다.

## 2. 핵심 구성 요소

### Contact Information
- Tech Blog (GitHub Pages)
- Gmail
- LinkedIn

### Experience
- 신세계I&C 스파로스 아카데미 4기 (2024.02 ~ 2024.07)
- 삼성 청년 SW 아카데미 9기 (2023.01 ~ 2023.12)

### Tech Stack
- **Language**: Java, Python, JavaScript
- **Backend**: Spring Boot/Cloud, Django, Flask
- **Database**: MySQL, MariaDB, PostgreSQL, MongoDB
- **Infrastructure**: AWS, Docker, Nginx, Jenkins, Linux
- **Collaboration**: Git, Jira, Gerrit

### GitHub Stats
- GitHub 활동 통계
- 주요 사용 언어 통계
- 방문자 수 카운터

## 3. 기술 명세

### 개발 스택
- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Version Control**: Git/GitHub
- **Deployment**: GitHub Pages

### 구현 요구사항
- SPA(Single Page Application) 구조
- 반응형 웹 디자인
- 모바일 최적화
- 부드러운 스크롤 애니메이션
- 프로젝트 카드 형식의 갤러리
- 다크모드 지원
- GitHub Stats API 연동
- 스크롤 진행률 표시
- 페이지 로딩 애니메이션

### 다크모드 구현
- 시스템 설정 기반 자동 테마 적용
- 수동 테마 전환 기능
- 사용자 테마 선택 로컬 스토리지 저장
- 부드러운 테마 전환 애니메이션

### 추가 기능 상세
#### 1. 다크모드
- 헤더에 테마 토글 버튼 추가
- Tailwind CSS 다크모드 설정
- 모든 컴포넌트 다크모드 스타일 적용

#### 2. GitHub Stats
- GitHub API를 통한 실시간 통계 표시
- 커밋 그래프, 사용 언어 통계
- 방문자 수 카운터 추가

#### 3. UI/UX 개선
- 스크롤 진행률 표시 바
- 스켈레톤 로딩 UI
- 부드러운 페이지 전환 효과

## 4. 개발 계획

### Phase 1: 기본 구조 개발
- 컴포넌트 구조 설계
- 라우팅 설정
- 기본 레이아웃 구현

### Phase 2: 주요 기능 구현
- 헤더/네비게이션
- 메인 소개 섹션
- 프로젝트 갤러리
- 기술 스택 표시
- 연락처 섹션

### Phase 3: 스타일링 및 최적화
- 반응형 디자인 적용
- 애니메이션 효과 추가
- 성능 최적화
- 크로스 브라우저 테스트

## 5. 프로젝트 구조
portfolio-website/
├── README.md
├── require/
│ └── prd.md
├── public/
│ └── assets/
│ └── images/
├── src/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ └── utils/
└── package.json