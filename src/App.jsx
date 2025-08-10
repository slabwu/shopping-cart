import './App.css'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
