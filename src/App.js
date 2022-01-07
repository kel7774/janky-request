import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
      <Switch>
        <Route path='/' exact component={PreviewPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/requests' component={Requests} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
