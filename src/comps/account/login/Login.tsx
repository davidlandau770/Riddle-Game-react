import { useRef, useState } from "react";
import "./login.css";

type account = {
  username: string,
  password: string
}

export default function Login() {
  const account = useRef<account>({ username: "", password: "" });
  const URL = "http://localhost:3000";

  const fetchLogin = async () => {
    if (account.current.username && account.current.password) {
      try {
        const response = await fetch(`${URL}/login`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(account.current)
        })
        const result = await response.json()
        console.log(result);
      } catch (error) {
        console.error(`login: ${error}`);
      }
    }
    else {
      console.log("The input's is required");
    }
  }

  return (
    <div className="account">
      <h1 className="title">Login:</h1>
      <form onSubmit={(e) => {e.preventDefault(); fetchLogin();}}>
        <div className="inputs">
          <label className="label" htmlFor="username">User name:</label>
          <input className="input" id="username" name="username" placeholder="Enter user name" onChange={(e) => account.current.username = e.target.value} />
          <label className="label" htmlFor="password">password:</label>
          <input className="input" id="password" name="password" placeholder="Enter password" onChange={(e) => account.current.password = e.target.value} />
        </div>
        <button className="btn" type="submit">login</button>
      </form>
    </div>
  )
}
