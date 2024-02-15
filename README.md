## 라우팅 설정

https://reactrouter.com/en/main/router-components/browser-router

## json-server

npm i json-server@0.17.4
https://github.com/typicode/json-server/tree/v0

#### json-server 실행

npx json-server --watch db.json --port 5000

## react bootstrap

npm install react-bootstrap bootstrap

## TODO

[ ]. 에러 핸들링

### memo

두 가지 방법 활용법

1. Link
   클릭 시 바로 이동하는 로직 구현 시에 사용
   ex) 상품 리스트에서 상세 페이지 이동 시
2. useNavigate
   페이지 전환 시 추가로 처리해야 하는 로직이 있을 경우 useNavigate 사용
   ex) 로그인 버튼 클릭 시
   회원가입 되어 있는 사용자 -> Main 페이지로 이동
   회원가입이 되어 있지 않은 사용자 -> SignUp 페이지로 이동

https://velog.io/@seokkitdo/React-Link-useNavigate
