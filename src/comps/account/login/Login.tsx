import { useContext, useEffect, useRef, useState } from "react";
import "./login.css";
import { LinkCurrPageContext } from "../../../context/LinkCurrentPageContext";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";

type account = {
  username: string;
  password: string;
}

// type result = {
//   msg: string;
// }

export type Player = {
  id: number;
  username: string;
  created_at: string;
  best_time: number;
  role: "user" | "admin" | "";
};

export type Result = {
  msg: string;
  currentPalyer: Player;
};

export default function Login() {
  const [note, setNote] = useState<account>({ username: "", password: "" });
  const [resultServer, setResult] = useState<string>("");
  const [addClassResult, setAddClassResult] = useState("");
  const navigate = useNavigate();
  const account = useRef<account>({ username: "", password: "" });
  const URL = "http://localhost:3000";
  
  const auth = useContext(AuthContext);
  const currPage = useContext(LinkCurrPageContext);
  useEffect(() => {
    currPage?.setCurrPage("Login")
  }, [])

  const fetchLogin = async () => {
    let result: Result;
    setNote({ username: "", password: "" });
    if (account.current.username && account.current.password) {
      try {

        const response = await fetch(`${URL}/login`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(account.current),
          credentials: "include"
        })
        result = await response.json();
        
        auth?.setUser({ ...auth.user, ["username"]: result.currentPalyer.username, ["role"]: result.currentPalyer.role})
        
        if (result.msg === "User not found") {
          setAddClassResult("errorDiv")
          setTimeout(() => {
            setAddClassResult("");
          }, 200);
        }
        else if (result.msg === "Unauthorized") {
          setAddClassResult("errorDiv")
          setTimeout(() => {
            setAddClassResult("");
          }, 200);
        }
        else {
          if (result.msg === "Verified") {
            setAddClassResult("goodDiv");
            setTimeout(() => {
              navigate("/");
              setAddClassResult("");
            }, 1000);
          }
        }
        result.msg === "User not found" ? setNote({ ...note, ["username"]: "User not found", ["password"]: "" }) : result.msg === "Unauthorized" ? setNote({ ...note, ["username"]: "", ["password"]: "Unauthorized" }) : result.msg === "Verified" ? setResult("Verified") : setNote({ ...note, ["username"]: "", ["password"]: "" })
        console.log(result);
        console.log(auth);
      } catch (error) {
        console.error(`login: ${error}`);
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
    <div className={`account ${addClassResult}`}>
      <h1 className="title">Login:</h1>
      <form onSubmit={(e) => { e.preventDefault(); fetchLogin(); }}>
        <div className="inputs">
          <p className="result">{resultServer}</p>
          <label className="label" htmlFor="username">User name<span className="redColor">*</span>:</label>
          <input className="input" id="username" name="username" placeholder="Enter user name" onChange={(e) => account.current.username = e.target.value} />
          <p className="errors">{note.username}</p>
          <label className="label" htmlFor="password">password<span className="redColor">*</span>:</label>
          <input className="input" id="password" name="password" placeholder="Enter password" onChange={(e) => account.current.password = e.target.value} />
          <p className="errors">{note.password}</p>
        </div>
        <button className="btn" type="submit">login</button>
      </form>
    </div>
  )
}