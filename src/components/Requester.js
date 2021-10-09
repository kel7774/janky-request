import React, { useState, useEffect } from 'react'
import db from '../firebase.config'
import Songs from './Songs'

const Requester = () => {
  const [song, setSong] = useState('')
  const [requester, setRequester] = useState('')

  function useSongs () {
    const [songs, setSongs] = useState([])
    useEffect(() => {
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

  const songs = useSongs()

  const addSong = (e) => {
    e.preventDefault()
    db.collection('requests').add({
      song,
      requester
    })
    setSong('')
    setRequester('')
  }

  const deleteSong = id => {
    db.collection('requests').doc(id).delete()
  }

  return (
    <div className='main-content'>
        <form onSubmit={addSong}>
        <div className='flex flex-col w-40 text-indigo-50 m-zeroAuto'>
            <input
              type='text'
            className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue  h-10 my-8 pl-3 rounded-md placeholder-indigo-50'
              value={requester}
              onChange={e => setRequester(e.target.value)}
              placeholder='i, [state your name]'
            />
            <input
              type='text'
            className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue  h-10 mb-8 pl-3 rounded-md placeholder-indigo-50'
              value={song}
              onChange={e => setSong(e.target.value)}
              placeholder='wanna hear'
            />
          <input className='bg-jazzLightPurp border-2 border-jazzLightPurp rounded-md w-28 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzLightPurp duration-300 ease-in' type='submit' />
          </div>
        </form>
      <div className='requestContainer'>
        {songs.map((song, index) => (
          <Songs
            key={index}
            index={index}
            song={song}
            deleteSong={deleteSong}
          />
        ))}
      </div>
    </div>
  )
}

export default Requester
