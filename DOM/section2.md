## DOM 개요

### Document와 Interface

- 콘텐츠 형태 - 브라우저에 다양한 형태로 콘텐츠 표현
- HTML5 이전에는 HTML, CSS의 텍스트 중심
- HTML5부터 다양한 형태의 콘텐츠 표현
- Document는 다양한 형태의 콘텐츠를 표현하는 매체로 애플리케이션으로 콘텐츠를 동적으로 표현
- 프로그램 관점의 DOM은 Document를 오브젝트로 접근하여 콘텐츠를 표현하는 모델
- DOM에서 제공하는 기능을 활용하여 DOM의 핵심을 구현

### DOM 스펙 레벨

- DOM 출현 배경 - 브라우저마다 처리 방법이 다른 크로스 브라우징을 jQuery 등의 프레임워크를 사용하여 대처
- DOM 레벨 - 레벨1, 2, 3, 4
    - DOM Lv1 - DOM Core, DOM HTML
    - DOM Lv2 - Mouse 이벤트 중심, Traversal and Range 스펙, Views 스펙, Style 스펙
    - DOM Lv3 - Events 스펙, Load and Save 스펙, Validation 스펙, DOM XPath
    - HTML5 DOM - 1, 2, 3 레벨 통합
    - DOM Lv4 - DOM Living Standard가 표준
- CSSOM - CSS Object Model, HTML5 단계에서 CSSOM으로 독립 분리