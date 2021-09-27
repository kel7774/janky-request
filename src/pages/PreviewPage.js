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
    <>
      <div className='main-page-content'>
        {/* <div className='song-container'>
          {songs.map((song, index) => (
            <Songs
              key={index}
              song={song}
            />
          ))}
      </div> */}
      </div>
      <div className='h-3/6 bg-gradient-to-tr- from-gray-200 via-red-700 to-purple-600'>
        <header>janky piano show</header>
      </div>
    </>
  )
}

export default PreviewPage
