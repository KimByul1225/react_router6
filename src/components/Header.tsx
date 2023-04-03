import { Link, useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate("/about");
        //무엇인가 권한체크를 한다던가
        //리다이렉을 시킨다던가 할때 유용
    }
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <button onClick={onClickHandler}>
                        About
                    </button>
                </li>
                
                
            </ul>
        </header>
        
    )
}

export default Header