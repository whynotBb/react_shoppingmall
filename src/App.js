import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
/* 
1. 전체 상품 페이지, 로그인, 상품 상세페이지
1-1. 네비게이션 바
2. 전체 상품 페이지에서는 전체 상품 볼 수 있다.
3. 로그인 버튼 누르면 로그인 페이지
4. 상품 디테일 눌렀으나, 로그인 안되어 있을 경우 로그인 페이지 나옴
5. 로그아웃 버튼 클릭 시 로그아웃
6. 버튼 : 로그인 시 로그아웃 버튼 / 로그아웃 시 로그인 버튼
7. 상품 검색 기능
 */
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default App;
