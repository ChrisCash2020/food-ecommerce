import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import { foot, nav } from './helpers/config'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import _Error from './pages/_Error'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* {show ? <Modal nav={nav} /> : null} */}
      <Nav nav={nav} />
      <SideBar type={'cart'} />
      <SideBar type={'contact'} />

      <div className='px-6 max-w-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu page={true} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<_Error />} />
        </Routes>
        <Footer title={foot.title} logo={foot.logo} links={foot.links} />
      </div>
    </div>
  )
}
export default App
