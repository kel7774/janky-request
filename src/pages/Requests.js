import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";

import Songs from '../components/Songs';
import {db, logout, auth} from '../firebase.config'

import stonks from '../assets/stonks.png';

const Requests = () => {
  const [song, setSong] = React.useState('')
  const [songs, setSongs] = React.useState([])
  const [requester, setRequester] = React.useState('')
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const [user, loading, error] = useAuthState(auth)

  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/')
  }

  React.useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
  }, [user, loading])

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

  const addSong = (e) => {
    e.preventDefault()
    db.collection('requests').add({
        song,
        requester
    })
    setSong('')
    setRequester('')
    if (error) {
      setSubmitSuccess(submitSuccess)
    } else {
      setSubmitSuccess(!submitSuccess)
    }
  }

  const deleteSong = id => {
    db.collection('requests').doc(id).delete()
  }

useSongs()
  
  return (
    <div className="text-center h-full p-12">
      <img src={stonks} alt="purchase your stonks" height='1000px' width='1000px' className='stonks m-auto rounded-lg' />
      <div className='flex flex-row justify-between mb-8'>
        <caption className='flex flex-row text-sm font-bold'>👆 that's peyton</caption>
        <caption className='text-sm font-bold'>he's probably drunk</caption>
      </div>
      <section className='mb-8'>
        <header>tired of peyton forgetting your requests?</header>
        <p>wanna <em>actually</em> be in the queue?</p>
      </section>
      <h1 className=''>submit your requests below</h1>
      <div className='content-container'>
        <form onSubmit={addSong}>
          <div className='flex flex-col w-40 items-center text-indigo-50 m-zeroAuto'>
            <input
              type='text'
              className='h-10 my-8 pl-3 shadow-2xl text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple'
              value={requester}
              onChange={e => setRequester(e.target.value)}
              placeholder='your name'
            />
            <input
              type='text '
              className='h-10 mb-8 pl-3 text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple'
              value={song}
              onChange={e => setSong(e.target.value)}
              placeholder='your request'
            />
          <input className='bg-jazzPurple font-semibold border-2 border-jazzPurple w-28 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in' type='submit' />
          </div>
        </form>
        {submitSuccess === true ? <div className='animate__animated animate__fadeOutDown'>Success! Request Submitted</div> : null}
        {/* <div className='requestContainer'>
          {songs.map((song, index) => (
            <Songs
              key={index}
              index={index}
              song={song}
              deleteSong={deleteSong}
            />
          ))}
        </div> */}
      </div>
      {/* {user &&
      <button className="p-6 border-4" onClick={onLogout}>
          Logout
        </button>} */}
    </div>
  )
}

export default Requests;
