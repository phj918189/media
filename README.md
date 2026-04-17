# PRE Crossfit - Static Site Refactor Log

기존 정적 HTML 기반 사이트의 UI를 유지하면서, 섹션별 하드코딩 데이터를 점진적으로 **데이터 기반 렌더링 구조**로 전환한 작업 내역입니다.

## 프로젝트 성격

- 정적 웹사이트 (HTML/CSS/JS)
- 빌드 도구 없이 브라우저에서 동작
- 기존 jQuery/AOS 사용 흐름은 유지하되, 신규 기능은 순수 JavaScript 중심으로 개선

## 이번 리팩토링 목표

1. 하드코딩된 콘텐츠를 JS 데이터로 분리
2. 섹션별 렌더러(`*Render.js`)로 DOM 생성
3. 기존 디자인/클래스/애니메이션(AOS) 훼손 없이 동작 유지
4. 플레이어/스크롤 인터랙션을 상태 기반으로 개선

## 적용된 주요 변경 사항

### 1) About 섹션 데이터 기반 렌더링

- 하드코딩된 About 콘텐츠를 `#about-root` 렌더링 루트 방식으로 변경
- 데이터 파일:
  - `js/aboutData.js`
- 렌더 파일:
  - `js/aboutRender.js`
- 포함 내용:
  - 코치 스피치(제목/설명/이미지)
  - 라이선스 이미지 목록 반복 렌더링
- 유지 사항:
  - 기존 클래스 (`speech`, `license`)
  - 기존 AOS 속성 (`fade-right`, `fade-left`, `fade-up`, `fade-down`)

### 2) Program 섹션 데이터 기반 렌더링

- 하드코딩된 Program 콘텐츠를 `#programRenderRoot`로 전환
- 데이터 파일:
  - `js/programData.js`
- 렌더 파일:
  - `js/programRender.js`
- 포함 내용:
  - WOD 정보
  - Weightlifting 목록
  - Program 카드(이미지/텍스트)
- 텍스트 처리:
  - 데이터 내 줄바꿈(`\n`)을 `<br>`로 변환하여 표시
- 유지 사항:
  - 기존 클래스 (`heroTxt` 등)
  - 기존 AOS 진입 애니메이션 패턴

### 3) 오디오 플레이어 상태 기반 개선

- 파일:
  - `js/audio.js`
- 핵심 개선:
  - 상태 관리 도입
    - `isPlaying`
    - `currentTrackIndex`
  - 트랙 배열 분리
    - `const tracks = [...]`
  - 함수 분리
    - `updateUI()`
    - `playTrack(index)`
  - 컨트롤 기능
    - 재생/일시정지 토글
    - 이전/다음 트랙 이동
    - 현재 선택 트랙 `.curr` 동기화
  - `audio` 이벤트(`play`, `pause`, `ended`) 기반 상태 동기화
- 제약 준수:
  - HTML 구조는 유지
  - jQuery 없이 순수 JS로 로직 개선

### 4) 스크롤 기반 메뉴 Active 인터랙션 추가

- 파일:
  - `js/sectionActive.js`
  - `css/common.css` (active 스타일 추가)
- 동작:
  - 현재 스크롤 위치에 따라 헤더 메뉴 active 자동 변경
  - `section.offsetTop` 기준 계산
  - `requestAnimationFrame` 기반 스크롤 처리로 성능 고려
- UI 강조:
  - active 링크 색상/밑줄 강조
  - 헤더 scrolled 상태에서도 active 가시성 유지

## 엔트리 파일 반영 내용

- `index.html` 스크립트 로딩 추가:
  - `./js/aboutData.js`
  - `./js/aboutRender.js`
  - `./js/programData.js`
  - `./js/programRender.js`
  - `./js/sectionActive.js`

## 파일 구조 (이번 작업 기준)

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
    ...
```

## 확인 방법

1. `index.html`을 브라우저에서 실행
2. About 섹션이 데이터 기반으로 렌더링되는지 확인
3. Program 섹션 카드/텍스트가 데이터 기반으로 렌더링되는지 확인
4. 오디오 플레이어:
   - Play/Pause 아이콘 토글
   - Prev/Next 동작
   - 현재 트랙 `.curr` 강조
5. 스크롤 시 헤더 메뉴 active가 현재 섹션에 맞게 변경되는지 확인
6. AOS 애니메이션이 기존처럼 동작하는지 확인

## 참고

- 본 작업은 UI/레이아웃을 바꾸기보다 **구조를 데이터 기반으로 전환**하는 데 집중했습니다.
- 정적 사이트 특성상 npm 스크립트 없이도 실행 가능하며, 필요 시 정적 서버로 확인할 수 있습니다.
