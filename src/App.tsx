import { useState } from 'react'

import Login from './pages/Login';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login /> 
    </div>
  )
}

export default App
