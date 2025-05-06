# 🚗 wiblebiz FAQ 화면 구현하기

## 📋 목차

- [프로젝트 개요](#프로젝트-개요)
- [주요 기능](#주요-기능)
- [시연 영상](#시연-영상)
- [기술 스택](#기술-스택)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [폴더 구조](#폴더-구조)

---

## 프로젝트 개요

- **원본 사이트**: [https://wiblebiz.kia.com/FAQ](https://wiblebiz.kia.com/FAQ)
- **구현 목표**: Next.js + TypeScript 기반의 FAQ 화면 클론 코딩

---

## 주요 기능

- **FAQ 검색**: 2글자 이상 입력 시 실시간 필터링, 2글자 미만 입력 시 안내 다이얼로그 표시
- **카테고리/소분류 탭**: 탭 UI로 분류 전환
- **페이징(더보기)**: FAQ가 많을 경우 "더보기" 버튼으로 추가 로딩
- **모달/다이얼로그**: 에러 안내, 약관 등 모달 컴포넌트 활용
- **반응형 UI**: 모바일~데스크탑 환경 대응

---

## 시연 영상
[![시연 영상 바로가기](https://img.youtube.com/vi/GfnTuOBm5Ao/0.jpg)](https://youtu.be/GfnTuOBm5Ao)
  
- [시연 영상 보기](https://youtu.be/GfnTuOBm5Ao)
  
---

## 기술 스택

- **Next.js 15+**
- **React 19**
- **TypeScript**
- **CSS Modules**
- **ESLint/Prettier**
- **json-server**

---

## 설치 및 실행 방법

### 1. 저장소 클론

`git clone https://github.com/seo-inyoung/kia-faq-clone.git`
`cd kia-faq-clone`

### 2. 패키지 설치

`npm install`
또는
`yarn install`

### 3. 개발 서버 실행

- 해당 명령어를 실행하면 **Next.js 앱(port: 3000)**과 **json-server(port: 9999)**가 동시에 실행됩니다.

`npm run dev`
또는
`yarn dev`

---

## 폴더 구조
```
src/
├── app/ # Next.js 라우팅
├── components/ # UI 컴포넌트
│ ├── common/ # 공통(재사용) 컴포넌트
│ ├── faq/ # FAQ 관련 컴포넌트
│ ├── layout/ # 레이아웃 관련 컴포넌트
│ └── ...
├── styles/ # CSS (기능별 분리)
├── util/ # API, 유틸 함수
└── ...
server.js # json-server 실행 스크립트
db.json # 목업 데이터 파일
```
---
