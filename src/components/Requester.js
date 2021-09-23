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
    <div>
      <div className=''>
        <form onSubmit={addSong}>
          <div className='flex flex-row justify-evenly text-indigo-50'>
            <input
              type='text'
              className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue  h-10 rounded-md placeholder-indigo-50'
              value={requester}
              onChange={e => setRequester(e.target.value)}
              placeholder='this person'
            />
            <input
              type='text'
              className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue  h-10 rounded-md placeholder-indigo-50'
              value={song}
              onChange={e => setSong(e.target.value)}
              placeholder='wants to hear...'
            />
            <input className='bg-jazzLightPurp rounded-md w-28 uppercase cursor-pointer' type='submit' />
          </div>
        </form>
      </div>
      <div className='requestContainer h-96 overflow-scroll mt-12'>
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
