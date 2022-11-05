import { useState } from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import './App.css'
import Home from './Home'
import Repo from './components/Repo';
import Error from './components/Error';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

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
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  )
}

export default App
