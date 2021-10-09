import React, { useState, useEffect } from 'react'
import db from '../firebase.config'
import Songs from '../components/Songs'
import JankyThings from '../assets/janky_things.jpeg';

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
    <div className='text-center bg-gradient-to-br from-jazzBlue via-jazzPurple to-jazzLightPurp h-screen'>
      <img className='janky-things m-auto p-12' src={JankyThings} height='1200px' width='1200px' alt="janky-things" />
      <section>
        <h1 className='text-white tracking-wide'>janky reviews</h1>
      </section>
    </div>
  )
}

export default PreviewPage
