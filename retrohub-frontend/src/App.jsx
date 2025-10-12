import './App.css'
import GetStarted from './pages/GetStarted'
import Navbar from './components/Navbar'
import { Routes,Route }  from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Team from './pages/Team'
import MyTeam from './pages/MyTeams'
import Retroboard from './pages/Retroboard'
import Discussion from './pages/Discussion'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import VerifySuccess from './pages/VerifySuccess'
import VerifyFailed from './pages/VerifyFailed'
import JoinTeam from './pages/JoinTeam'
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
        <Route path="/teams/:teamId/retroboard" element={<Retroboard />} />
        <Route path="/teams/:teamId/discussion/:discussionId" element={<Discussion />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path='/verify-success' element={<VerifySuccess/>}/>
        <Route path='/verify-failed' element={<VerifyFailed/>}/>
        <Route path='/join-team/:teamId' element={<JoinTeam/>}/>
      </Routes> 
       
    </>
  )
}

export default App
