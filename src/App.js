import React from 'react'
import { EasybaseProvider } from 'easybase-react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import ebconfig from './ebconfig'
import ProtectedRoute from './auth/protected-route'
import NavBar from './components/nav-bar'
import PreviewPage from './pages/PreviewPage'
import MainContent from './components/MainContent'

function App () {
  const { isLoading } = useAuth0()
  if (isLoading) return 'Loading ...'
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={PreviewPage} />
          <ProtectedRoute path='/main' component={MainContent} />
        </Switch>
        <NavBar />
      </div>
    </EasybaseProvider>
  )
}

export default App
