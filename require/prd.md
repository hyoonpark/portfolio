# Portfolio Website PRD

## 1. 프로젝트 개요
이 프로젝트는 백엔드 주니어 개발자의 포트폴리오 웹사이트로, 개발자의 소개 및 기술 스택, 프로젝트 경험 등을 효과적으로 전달하는 것을 목표로 합니다.

## 2. 핵심 구성 요소

### Contact Information
- Tech Blog (GitHub Pages)
- Gmail
- LinkedIn
- GitHub

### Education
- 부산대학교 유기소재시스템공학과 졸업 (2015.03 ~ 2021.02)

### Curriculum
- 신세계I&C 스파로스 아카데미 4기 (2024.02 ~ 2024.07)
  - MSA 기반 애플리케이션 개발 과정
  - Spring Cloud, AWS 기반 마이크로서비스 아키텍처 학습
  - 실무 프로젝트 경험

- 삼성 청년 SW 아카데미 9기 (2023.01 ~ 2023.12)
  - 알고리즘, 자료구조 심화 학습
  - Spring Boot 기반 웹 서비스 개발
  - 팀 프로젝트 수행 및 협업 경험

### Certificate
- 정보처리기사 (2023.06)
- SQLD (2023.06)

### Experience
- 개인 프로젝트: 저속 노화 기록 애플리케이션 (2023.10 ~ 운영 예정)
  - Spring Boot, Spring Cloud 기반 MSA 아키텍처 구현
  - AWS ECS, RDS 활용한 클라우드 인프라 구축
  - CI/CD 파이프라인 구축 및 운영 경험

### Tech Stack
- **Language**: Java, Python, JavaScript, TypeScript
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

### 섹션별 구현 상세
#### 1. About Me
- 자기소개
- 프로필 이미지
- 연락처 정보
- 소셜 미디어 링크

#### 2. Education & Curriculum
- 학력 정보 타임라인
- 교육과정 상세 내용
- 주요 학습 내용 강조

#### 3. Certificates
- 자격증 획득 일자
- 자격증 관련 상세 정보
- 시각적 아이콘 표시

#### 4. Projects
- 프로젝트 썸네일
- 기술 스택 태그
- 주요 기능 설명
- GitHub 링크
- 데모 링크 (가능한 경우)

#### 5. Tech Stack
- 카테고리별 기술 분류
- 숙련도 표시
- 시각적 아이콘 활용

## 4. 개발 계획

### Phase 1: 기본 구조 개발 (1주차)
- 컴포넌트 구조 설계
- 라우팅 설정
- 기본 레이아웃 구현

### Phase 2: 주요 기능 구현 (2-3주차)
- About Me 섹션
- Education & Curriculum 섹션
- Certificates 섹션
- Projects 섹션
- Tech Stack 섹션

### Phase 3: 스타일링 및 최적화 (4주차)
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
│   └── images/
├── src/
│ ├── components/
│ │ ├── About/
│ │ ├── Education/
│ │ ├── Certificates/
│ │ ├── Projects/
│ │ └── TechStack/
│ ├── pages/
│ ├── styles/
│ └── utils/
└── package.json