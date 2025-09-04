import { useContext, useEffect, useRef, useState } from "react"
import { LinkCurrPageContext } from "../../../context/LinkCurrentPageContext";
import { Link, useNavigate } from "react-router";
import { URL, type account, type Data } from "../login/Login";
import { AuthContext } from "../../../context/AuthContext";

export default function Register() {
  const auth = useContext(AuthContext);
  const currPage = useContext(LinkCurrPageContext);
  const [note, setNote] = useState<account>({ username: "", password: "" });
  const [addClassData, setAddClassData] = useState("");
  const [resultServer, setResult] = useState<string>("");
  const account = useRef<account>({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    currPage?.setCurrPage("Register")
  }, [])

  const fetchRegister = async () => {
    let data: Data;
    setNote({ username: "", password: "" });
    if (account.current.username && account.current.password) {
      try {
        const response = await fetch(`${URL}/signup`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(account.current),
          credentials: "include"
        })
        data = await response.json();
        console.log(data);

        auth?.setUser({ ...auth.user, ["username"]: data?.currentPalyer?.username, ["role"]: data?.currentPalyer?.role })

        if (data.msg === "The username already exists") {
          setAddClassData("errorDiv");
          setNote({ ...note, ["username"]: data.msg, ["password"]: "" });
          setTimeout(() => {
            setAddClassData("");
          }, 200);
        }
        else if (data.msg === "The player has been successfully registered!") {
          setAddClassData("goodDiv");
          setResult("successfully registered!")
          setTimeout(() => {
            navigate("/");
            setAddClassData("");
          }, 1000);
        }
        else {
          setNote({ ...note, ["username"]: "", ["password"]: "" })
        }
      } catch (error) {
        console.error(`register: ${error}`);
      }
    }
    else {
      const errors: { username: string; password: string } = { username: "", password: "" };

      if (!account.current.username) {
        errors.username = "The username is required!";
      }
      if (!account.current.password) {
        errors.password = "The password is required!";
      }
      setNote(errors);
    }
  }
  return (
    <div className={`account ${addClassData}`}>
      <h1 className="title">Register:</h1>
      <form onSubmit={(e) => { e.preventDefault(); fetchRegister(); }}>
        <div className="inputs">
          <p className="result">{resultServer}</p>
          <label className="label" htmlFor="username">User name<span className="redColor">*</span>:</label>
          <input className="input" id="username" name="username" placeholder="Enter user name" onChange={(e) => account.current.username = e.target.value} />
          <p className="errors">{note.username}</p>
          <label className="label" htmlFor="password">password<span className="redColor">*</span>:</label>
          <input className="input" id="password" name="password" placeholder="Enter password" onChange={(e) => account.current.password = e.target.value} />
          <p className="errors">{note.password}</p>
          <Link to={"/login"} className="toTurnPage">Have you already registered?<img src="link.png" /></Link>
        </div>
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  )
}
