import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
      </Router>
    </>
  )
}

export default App
