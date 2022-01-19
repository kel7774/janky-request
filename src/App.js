import React from 'react'
import {Route, Routes} from 'react-router'

import {db} from './firebase.config'

import TopNav from './components/TopNav'
import Footer from './components/Footer'

import AuthManager from './pages/AuthManager'
import Login from './pages/Login'
import Register from './pages/Register'
import Reset from './pages/Reset'
import PreviewPage from './pages/PreviewPage'
import Requester from './pages/Requester'
import SongListingScreen from './pages/SongListingScreen'

function App () {
  const [song, setSong] = React.useState('')
  const [songs, setSongs] = React.useState([])
  const [requester, setRequester] = React.useState('')
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const handleRequester = (e) => {
    setRequester(e.target.value)
  }

  const handleSong = (e) => {
    setSong(e.target.value)
  }

  function useSongs () {
    React.useEffect(() => {
      db.collection('requests')
        .onSnapshot(snapshot => {
          const lists = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          setSongs(lists)
        })
    }, [])
    return songs
  }

useSongs()

  return (
    <div className='App'>
      <TopNav />
      <Routes>
        <Route path='/authmanager' element={<AuthManager />} />
        <Route path='/' exact element={<PreviewPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/makerequests' element={<Requester submitSuccess={submitSuccess} setSubmitSuccess={setSubmitSuccess} requester={requester} handleRequester={handleRequester} setRequester={setRequester} song={song} handleSong={handleSong} setSong={setSong} />} />
        <Route path='/yourrequests' element={<SongListingScreen songs={songs} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
