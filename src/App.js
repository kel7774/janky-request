import React from 'react'
import {Route, Routes} from 'react-router'
import TopNav from './components/TopNav'
import Login from './pages/Login'
import Register from './pages/Register'
import PreviewPage from './pages/PreviewPage'
import Footer from './components/Footer'
import Requester from './pages/Requester'

function App () {
  return (
    <div className='App'>
      <TopNav />
      <Routes>
        <Route path='/' exact element={<PreviewPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/makerequests' element={<Requester />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
