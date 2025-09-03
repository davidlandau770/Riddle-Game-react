import { useState } from 'react';
import './App.css'
import Nav from './comps/nav/Nav'
import ConfigRoutes from './pages/ConfigRoutes'
import { LinkCurrPageContext } from './comps/context/LinkCurrentPageContext';

export default function App() {
  const [currPage, setCurrPage] = useState<string>("Home");

  return (
    <>
      <LinkCurrPageContext.Provider value={{ currPage, setCurrPage,  }} >
        <Nav />
        <div id='container'>
          <ConfigRoutes />
        </div>
      </LinkCurrPageContext.Provider>
    </>
  )
}
