import React, { useState, useEffect } from 'react'
import db from '../firebase.config'
import Songs from '../components/Songs'

const PreviewPage = () => {
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
  return (
    <div className='main-page-content flex flex-col'>
      <div className='text-center'>
        <h1 className='font-light text-4xl text-indigo-50'><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue p-3'>your janky requests</span></h1>
        <div className='song-container'>
          {songs.map((song, index) => (
            <Songs
              key={index}
              song={song}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviewPage
