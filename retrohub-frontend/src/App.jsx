import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetStarted from './pages/GetStarted'
import Navbar from './components/Navbar'
import { Routes,Route }  from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<GetStarted/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
       
    </>
  )
}

export default App
