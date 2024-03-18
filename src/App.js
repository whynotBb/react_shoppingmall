import './App.css';
import {Navigate, Route, Routes, useNavigate, useSearchParams} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import PrivateRoute from './route/PrivateRoute';
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
    const navigate = useNavigate();
    // 로그인 환경 테스트를 위한 useState - true : 로그인 / false : 로그아웃
    const [authenticate, setAuthenticate] = useState(false);
    useEffect(() => {
        console.log('authenticate', authenticate);
        navigate('/');
    }, [authenticate]);
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get('q') || '';
        console.log('searchQuery', searchQuery);
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, [query]);

    // 로그인 여부에 따라 분기처리해야 할때 직접 써도 되고, 컴포넌트를 분리해도 된다.
    // const PrivateRoute = () => {
    //     return authenticate === true ? <ProductDetail /> : <Navigate to='/login' />;
    //     // Navigate -> redirect 할 수 있도록 도와주는 컴포넌트(react router dom 에서 제공)
    // };
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductAll productList={productList} />} />
                <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
                {/* <Route path='/product/:id' element={<ProductDetail />} /> */}
                <Route
                    path='/product/:id'
                    element={<PrivateRoute authenticate={authenticate} productList={productList} />}
                />
            </Routes>
        </div>
    );
}

export default App;
