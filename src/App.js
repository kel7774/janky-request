import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from 'semantic-ui-react'
import ProtectedRoute from './auth/protected-route'
import TopNav from './components/TopNav'
import PreviewPage from './pages/PreviewPage'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Requests from './pages/Requests'

function App () {
  const { isLoading } = useAuth0()
  if (isLoading) return <Loader>Loading</Loader>
  return (
    <div className='App'>
      <TopNav />
      <Switch>
        <Route path='/' exact component={PreviewPage} />
        <Route path='/requests' component={Requests} />
        <Route path='/main' component={MainContent} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
