import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    const menuList = ["01", "02", "03"];
    return (
        <div>
            <div className="login-section">
                <button>
                    <FontAwesomeIcon icon={faUser} />
                    로그인
                </button>
            </div>
            <div className="logo-section">logo</div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="search-input">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};
export default Navbar;
