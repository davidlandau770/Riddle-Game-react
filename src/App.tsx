import './App.css'
import Nav from './comps/nav/Nav'
import ConfigRoutes from './pages/ConfigRoutes'

export default function App() {

  return (
    <>
      <Nav />
      <div id='container'>
        <ConfigRoutes />
      </div>
    </>
  )
}
