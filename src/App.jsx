import './App.css'
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
