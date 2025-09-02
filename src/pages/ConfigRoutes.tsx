import { Route, Routes } from "react-router";
import Home from "../comps/home/Home";
import Account from "../comps/account/Account";
import Settings from "../comps/home/Settings";
import LinkAbout from "../comps/home/LinkAbout";

export default function ConfigRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='account' element={<Account />} />
                <Route path='/about' element={<LinkAbout />} />
                <Route path='/settings' element={<Settings />}>
                </Route>
            </Routes>

        </div>
    )
}
