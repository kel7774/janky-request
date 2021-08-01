import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import ProtectedRoute from './auth/protected-route'
import NavBar from './components/nav-bar'
import PreviewPage from './pages/PreviewPage'
import MainContent from './components/MainContent'

function App () {
  const { isLoading } = useAuth0()
  if (isLoading) return 'Loading ...'
  return (
    <div className='App'>
      <div>
        <Switch>
          <Route path='/' exact component={PreviewPage} />
          <ProtectedRoute path='/main' component={MainContent} />
        </Switch>
      </div>
      <NavBar />
    </div>
  )
}

export default App
