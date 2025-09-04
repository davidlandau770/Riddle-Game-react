import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Logout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    auth?.setUser({ username: "", role: "" })
    const timer = setTimeout(() => {
      navigate("/")
    }, 1500)
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="account">
      <h1 className="title">You have successfully logged out of your account!</h1>
    </div>
  )
}
