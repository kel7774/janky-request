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
