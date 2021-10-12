import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import TopNav from './components/TopNav'
import PreviewPage from './pages/PreviewPage'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Requests from './pages/Requests'

function App () {
  //if (isLoading) return <Loader>Loading...</Loader>
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
