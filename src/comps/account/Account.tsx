import { useContext, useEffect } from "react"
import { LinkCurrPageContext } from "../context/LinkCurrentPageContext"
import { Link } from "react-router";
import "./account.css"

export default function Account() {
  const currPage = useContext(LinkCurrPageContext);
  useEffect(() => {
    // if (currPage?.currPage !== "Home")
    currPage?.setCurrPage("Account");
  }, [])
  return (
    <div className="account">
      <h2 className="title">Account:</h2>
      <Link className="link" to={"/login"}><button className="btn">login</button></Link>
      <Link className="link" to={"/register"}><button className="btn">register</button></Link>
    </div>
  )
}
