import { useState } from 'react';
import './App.css'
import Nav from './comps/nav/Nav'
import ConfigRoutes from './pages/ConfigRoutes'
import { LinkCurrPageContext } from './context/LinkCurrentPageContext';
import { AuthContext } from './context/AuthContext';

export default function App() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const [currPage, setCurrPage] = useState<string>("Home");

  return (
    <>
      <LinkCurrPageContext.Provider value={{ currPage, setCurrPage }} >
        <AuthContext.Provider value={{ user, setUser }}>
          <Nav />
          <div id='container'>
            <ConfigRoutes />
          </div>
        </AuthContext.Provider>
      </LinkCurrPageContext.Provider>
    </>
  )
}
