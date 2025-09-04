import { Route, Routes } from "react-router";
import Home from "../comps/home/Home";
import Account from "../comps/account/Account";
import Settings from "../comps/home/Settings";
import LinkAbout from "../comps/home/LinkAbout";
import Login from "../comps/account/login/Login";
import Register from "../comps/account/register/Register";
import Logout from "../comps/account/logout/Logout";

export default function ConfigRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='account' element={<Account />} />
                <Route path='login' element={<Login />} />
                <Route path='/about' element={<LinkAbout />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </div>
    )
}
