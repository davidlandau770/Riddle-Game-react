import { Link } from "react-router"
import "./home.css"
import { useContext, useEffect } from "react";
import { LinkCurrPageContext } from "../context/LinkCurrentPageContext";

export default function Home() {
    const currPage = useContext(LinkCurrPageContext);
    useEffect(() => {
      currPage?.setCurrPage("Home")
    }, [])
  
  return (
    <div className="account">
      <h1 className="title">Welcome to the world's greatest Riddle Game!</h1>
      <Link className="link" to={""}><button className="btn play">play game</button></Link>
      <Link className="link" to={"login"}><button className="btn">login</button></Link>
      <Link className="link" to={"register"}><button className="btn">register</button></Link>
    </div>
  )
}
