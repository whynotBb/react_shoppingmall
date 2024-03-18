import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {useRef, useState} from 'react';
const Navbar = () => {
    const menuList = ['01', '02', '03'];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };
    const search = (event) => {
        console.log(event);
        if (event.key === 'Enter') {
            // 입력한 검색어를 읽어와서 url 을 바꿔준다.
            let keyword = event.target.value;
            console.log(keyword);
            navigate(`/?q=${keyword}`);
        }
    };
    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState();
    return (
        <div>
            <LoginBtn className='login-section'>
                <button onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    로그인
                </button>
            </LoginBtn>
            <div className='logo-section'>LOGO</div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className='search-input'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' onKeyDown={(event) => search(event)} />
                    <p>{searchValue}</p>
                </div>
            </div>
        </div>
    );
};
const LoginBtn = styled.div`
    a {
        text-decoration: none;
        color: #222;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;
export default Navbar;
