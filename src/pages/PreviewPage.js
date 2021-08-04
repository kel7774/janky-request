import React, { useState, useEffect } from 'react'
// import { useMediaQuery } from 'react-responsive'
import irishwhiskey from '../assets/irishwhiskey.png'
import db from '../firebase.config'
import Songs from '../components/Songs'
import classes from '../styles/PreviewPage.module.css'

const PreviewPage = () => {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

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
      <div className={classes.container}>
        <div className={classes.songContainer}>
          <h1><span>your janky requests:</span></h1>
          {songs.map((song, index) => (
            <Songs
              key={index}
              song={song}
            />
          ))}
        </div>
        <div className={classes.plug}>
          <p><span>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (sup, i need a job).</span></p>
        </div>
        <div className={classes.footer}>
          <p className={classes.sponsored}>
            <strong>sponsored by:</strong>
          </p>
          <img src={irishwhiskey} height={150} width={200} alt='sponsored by jameson' />
        </div>
      </div>
  )
}

export default PreviewPage
