# React 홈페이지

[Link](https://yeodahui.github.io/react_practice/)

### 어려웠던 점

- 어떤 컴포넌트가 어느 디렉토리로 들어가야하는 지
- 컴포넌트 간 props로 전달되는 이벤트, state들을 추적하는 것
- 컴포넌트 간 props로 전달되는 이벤트, state들을 어디에서 선언해야 하는 지
- 헤더 내비게이션 항목을 클릭해도 메인 콘텐츠가 바뀌지 않았음.
  > onClick 이벤트는 정상적으로 실행되어 listName 상태는 변경됨을 확인. [Layout.jsx](./src/Components/Layout/Layout.jsx) Contents 함수에 props를 전달할 때, 구조분해할당으로 받아오지 않아서 조건과 일치하는 것이 없었기 때문이었음
