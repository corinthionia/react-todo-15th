# 3주차 미션: React-Todo: Refactor!💌

## 서론
안녕하세요 14기 프론트엔드 운영진 김현재입니다.

벌써 Todo로 진행하는 세 번째 미션인데요, 여러분들이 과제를 수행하실 때 마다 실력의 향상이 눈에 보이는 정도라 운영진 모두는 즐겁습니다.

첫 번째 과제를 통해 기본적인 리액트의 개념과 사용법에 어느 정도 알게 되셨을 것이라 생각이 듭니다.
세 번째 미션에서는 `Typescript` 를 적용하는 것입니다.

애플리케이션의 규모가 커지게 될 수록, 컴포넌트가 가지는 props의 종류 또한 다양해지게 됩니다.
무지성 코딩을 하다보면 가끔 이 props의 구성과 이름, 어떤 타입이 들어가야 하는지 헷갈리기 마련이죠.
보통 그럴 때 다시 컴포넌트 정의 부분으로 돌아가 props의 구성을 보고 오곤 합니다.

하지만 이럴 때, typescript를 적용한다면 컴포넌트의 구성과
그 이름, 심지어 타입까지 한번에 자동완성으로 편리하게 관리할 수 있고, 생산성이 증대되겠죠.
**또한 2주차 때의 코드 리뷰를 적용해보고, 조금 더 아름다운 코드와,**
**코드를 작성할 때에 생산성을 높이는 방법에 대해 고민해 보시길 바랍니다.**

리액트에선 자주 쓰이는 로직들을 hooks로 모아두어서 한단계 더 추상화 하여 관리할 수 있는데요, 이를 custom hooks라고 합니다.
**반복되는 함수들을 줄여보거나, custom hooks를 사용하여 훨씬 가독성 좋은 코드를 작성해 보셨으면 합니다.**
이 과정에서 custom hooks를 적용해 중복되는 로직을 최적화 해보시고, typescript를 통해 정적 타이핑의 이점을 느껴보시기 바랍니다.

**any type은 지양합시다**

---

# 미션

## 미션 목표
- Styled-components와 React에 익숙해진다.
- Custom hooks의 사용법을 이해한다.
- TypeScript의 정적 타이핑을 React에 적용해본다. ~~Anyscript~~
- UI 컴포넌트의 중복을 줄여본다.

## 기한
- 2022년 4월 1일(금)까지 **(마감 기한 꼭 지켜주세요)**

## 필수요건
- Custom hooks를 통해 중복되는 로직을 줄이기
- TypeScript 적용하기
- Styled-components에서 props 사용해보기

## 선택사항
- Redux, Context API등 Flux 패턴 적용해보기 (Context API 적용해보는 것 추천)
- Base UI Component system을 통해 UI 컴포넌트의 코드 재사용성 높이기

# 링크 및 참고자료
---

- [기존 js -> ts로 바꾸기](https://hini7.tistory.com/148)
- [패키지 적용하기](https://flowkater.io/frontend/setup-styled-components/)
- [타입스크립트 기초](https://joshua1988.github.io/ts/intro.html)
- [TypeScript in React](https://react.vlpt.us/using-typescript/02-ts-react-basic.html)
- [Custom hooks](https://ko.reactjs.org/docs/hooks-custom.html)
- [Flux 패턴이란?](https://velog.io/@huurray/React%EC%9D%98-%ED%83%84%EC%83%9D%EA%B3%BC-Flux-%ED%8C%A8%ED%84%B4%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)
