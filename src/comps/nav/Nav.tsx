import { Link } from "react-router";
import "./nav.css";

export default function Nav() {
    return (
        <nav>
            <ol className="ol">
                <li className="li"><Link to={"/"}><img className="img1" src="./src/assets/logo.png" /></Link></li>
                <li className="li"><Link to={"/"}>{"namePage"}</Link></li>
                <li className="li"><Link to={"/account"}><img className="img2" src="./src/assets/account.png" /></Link></li>
                <li className="li"><Link to={"/about"}>About</Link></li>
            </ol>
        </nav>
    )
}
