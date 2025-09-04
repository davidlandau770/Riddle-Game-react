import { Link } from "react-router";
import "./nav.css";
import { useContext } from "react";
import { LinkCurrPageContext } from "../../context/LinkCurrentPageContext";
import { AuthContext } from "../../context/AuthContext";

export default function Nav() {
    const auth = useContext(AuthContext);
    const currPage = useContext(LinkCurrPageContext);    
    
    return (
        <nav>
            <ol className="ol">
                <li className="li"><Link to={"/"}><img className="img1" src="logo.png" /></Link></li>
                {auth?.user?.role === "admin" && <li className="li"><Link to={`/players`}>Get all players</Link></li>}
                {auth?.user?.username && <li className="li"><Link to={`/users/${auth.user.username}`}>{auth.user.username}</Link></li>}
                {!auth?.user?.username && <li className="li"><Link to={"/account"}><img className="img2" src="account.png" /></Link></li>}
                <li className="li"><Link to={"/about"}>About</Link></li>
            </ol>
            <p className="currPage">» {currPage?.currPage} »</p>
        </nav>
    )
}
