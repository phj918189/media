# PRE Crossfit

크로스핏 박스를 소개하는 반응형 정적 웹사이트 프로젝트입니다.  
기존 HTML 하드코딩 구조를 유지한 UI 위에서, 일부 섹션을 **데이터 기반 렌더링**과 **상태 기반 인터랙션**으로 리팩토링했습니다.

## Project Type
- Static Website (HTML / CSS / JavaScript)
- Responsive Web
- jQuery + AOS 기반 기존 구조 유지
- 신규 로직은 Vanilla JavaScript로 개선

## Main Sections
- About
- Program
- Multimedia
- Membership
- Contact

## Refactor Highlights

### About
- 하드코딩된 콘텐츠를 `aboutData.js`로 분리
- `aboutRender.js`로 DOM 렌더링 구조 적용
- 기존 텍스트, 이미지, 클래스, AOS 애니메이션 유지

### Program
- WOD / Weightlifting / Program 카드 데이터를 `programData.js`로 분리
- `programRender.js`로 반복 렌더링 구조 적용
- 줄바꿈 데이터(`\n`)를 `<br>`로 변환해 출력

### Audio Player
- `audio.js`를 상태 기반 구조로 리팩토링
- `isPlaying`, `currentTrackIndex` 상태 관리
- 재생 / 일시정지 / 이전곡 / 다음곡 / `.curr` 동기화 개선

### Scroll Active Menu
- 현재 섹션 위치에 따라 헤더 메뉴 active 자동 변경
- `requestAnimationFrame` 기반 스크롤 처리
- active 스타일 가시성 개선

## Files
```text
media/
  index.html
  css/
    common.css
    layout.css
  js/
    aboutData.js
    aboutRender.js
    programData.js
    programRender.js
    audio.js
    sectionActive.js
    common.js
    ham.js