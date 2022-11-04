import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home'
import Repo from './components/Repo';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact 
        element={<Home />
        }>
        </Route>
        <Route path='/repo' 
        element={
        <Repo />
        }>

        </Route>
      </Routes>
    </div>
  )
}

export default App
