# PRE Crossfit

크로스핏 박스 **PRE Crossfit**을 소개하는 반응형 정적 웹사이트 포트폴리오 프로젝트입니다.  
기존 HTML/CSS/jQuery 구조를 유지하면서, 핵심 섹션을 **데이터 기반 렌더링**과 **상태 기반 인터랙션**으로 개선했습니다.

## Live Demo

로컬 실행:

```bash
python -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- jQuery (레거시 UI 호환)
- AOS (스크롤 애니메이션)
- Masonry + Swiper (갤러리 / 캐러셀)
- Magnific Popup (YouTube 모달)

## Pages

| 페이지 | 설명 |
|--------|------|
| `index.html` | 메인 랜딩 (Hero, 5개 섹션, 오디오 플레이어) |
| `sub/sub1.html` | About 상세 |
| `sub/sub2.html` | Program 상세 (WOD, 스케줄) |
| `sub/sub3.html` | Multimedia (YouTube, Masonry 갤러리) |
| `sub/sub4.html` | Membership (요금, Swiper) |
| `sub/sub5.html` | Contact (지도, 문의 폼, 팝업) |
| `Login.html` / `Signup.html` | 인증 UI 데모 |

## Portfolio Highlights

### 데이터 기반 렌더링
- About: `aboutData.js` → `aboutRender.js`
- Program: `programData.js` → `programRender.js`
- DOM 주입 후 AOS refresh로 애니메이션 동기화

### 상태 기반 UI
- **Audio Player** (`audio.js`): `isPlaying`, `currentTrackIndex` 상태 관리
- **Scroll Spy** (`sectionActive.js`): `requestAnimationFrame` 기반 섹션 active 처리
- **Contact Popup** (`contact_popup.js`): 폼 타입별 모달 + ESC 닫기

### 코드 품질 개선
- `common.js` / `ham.js` 중복 제거 → 단일 네비게이션 모듈
- 서브 페이지 `?num=` 파라미터 검증 및 active nav 자동 표시
- Masonry DOM 구조 수정, 접근성(alt, skip-nav focus, aria-label) 보강
- Login/Signup 데모 페이지 브랜드 UI 적용

## Project Structure

```text
Crossfit-WEB/
├── index.html
├── Login.html / Signup.html
├── css/
│   ├── common.css
│   ├── layout.css
│   ├── auth.css
│   └── sub1~5.css
├── js/
│   ├── aboutData.js / aboutRender.js
│   ├── programData.js / programRender.js
│   ├── audio.js / sectionActive.js / video.js
│   ├── common.js / contact_popup.js / auth.js
│   └── galley.js / membership.js / sub_img_back.js
├── sub/
│   └── sub1.html ~ sub5.html
└── images/
```

## Note

- Login, Signup, Contact 팝업/폼은 **포트폴리오 데모**이며 실제 서버 전송은 없습니다.
- Hero 영상, 음악, 외부 링크(Instagram, YouTube, Naver Cafe)는 실제 콘텐츠 기준으로 구성되어 있습니다.

## Author

Portfolio Project — PRE Crossfit Brand Website
