import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetStarted from './pages/GetStarted'
import Navbar from './components/Navbar'
import { Routes,Route }  from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Team from './pages/Team'
import MyTeam from './pages/MyTeams'
function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<GetStarted/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/create-team' element={<Team/>}/>
        <Route path='/teams' element={<MyTeam/>}/>
      </Routes> 
       
    </>
  )
}

export default App
