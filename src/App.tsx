import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Expences from './pages/Expences/Expences'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Expences />
      </Router>
    </>
  )
}

export default App
