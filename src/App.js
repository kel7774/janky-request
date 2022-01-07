import React from 'react'
import {Route, Routes} from 'react-router'
import TopNav from './components/TopNav'
import Login from './pages/Login'
import Register from './pages/Register'
import PreviewPage from './pages/PreviewPage'
import Footer from './components/Footer'
import Requests from './pages/Requests'

function App () {
  return (
    <div className='App'>
      <TopNav />
      <Routes>
        <Route path='/' exact element={<PreviewPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/requests' element={<Requests />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
