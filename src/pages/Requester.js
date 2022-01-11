import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate, Link} from "react-router-dom";

import {db, auth} from '../firebase.config'

import stonks from '../assets/stonks.png';

const Requester = ({ song, setSong, requester, setRequester, submitSuccess, setSubmitSuccess, handleSong, handleRequester }) => {
  const [user, loading, error] = useAuthState(auth)

  const navigate = useNavigate()

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

  React.useEffect(() => {
    if (loading) return
    if (!user) return navigate('/makerequests')
  }, [user, loading, navigate])
  
  return (
    <div className="text-center h-full p-12">
      <img src={stonks} alt="purchase your stonks" height='1000px' width='1000px' className='stonks m-auto rounded-lg' />
      <section className='flex flex-row justify-evenly mb-8'>
        <figcaption className='flex flex-row text-sm font-bold'>👆 that's peyton</figcaption>
        <div>😬</div>
        <figcaption className='text-sm font-bold'>he's probably drunk</figcaption>
      </section>
      <section className='mb-8'>
        <header className='font-normal'>tired of peyton forgetting your requests?</header>
        <p>wanna <em>actually</em> be in the queue?</p>
      </section>
      <h1 className='font-semibold'>submit your requests below</h1>
      <div className='content-container'>
        <form onSubmit={addSong}>
          <div className='flex flex-col w-40 items-center text-indigo-50 m-zeroAuto'>
            <input
              type='text'
              className='h-10 my-8 pl-3 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple active:border-black'
              value={requester}
              onChange={handleRequester}
              placeholder='your name'
              maxLength='30'
            />
            <input
              type='text '
              className='h-10 mb-8 pl-3 rounded text-jazzPurple placeholder-jazzPurple border-2 border-jazzPurple'
              value={song}
              onChange={handleSong}
              placeholder='your request'
              maxLength='30'
            />
          <input className='bg-jazzPurple rounded font-semibold border-2 border-jazzPurple w-28 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in' type='submit' />
          </div>
        </form>
        {submitSuccess === true ? <div className='animate__animated animate__fadeOutDown'>🎉 success! request submitted</div> : null}
      </div>
      <div>
        <h1>already requested a song?</h1>
        <h4>check where you are in the queue</h4>
        <Link to='/yourrequests'>🚀 click here</Link>
      </div>
      {/* {user &&
      <button className="p-6 border-4" onClick={onLogout}>
          Logout
        </button>} */}
    </div>
  )
}

export default Requester;
