import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import db from '../firebase.config'
import Songs from '../components/Songs'
import classes from '../styles/PreviewPage.module.css'

const PreviewPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 767px)' })

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
      {
        isTabletOrMobile &&
        isTabletOrMobileDevice
          ? (
            <div className={classes.mobileContainer}>
              <h1><span>your janky requests:</span></h1>
              <div className={classes.mobileSongContainer}>
                {songs.map((song, index) => (
                  <Songs
                    key={index}
                    song={song}
                  />
                ))}
              </div>
              <div className={classes.mobilePlug}>
                <p><span>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (hire me!)</span></p>
              </div>
            </div>)
          : (
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
                <p><span>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a></span></p>
              </div>
            </div>)
      }
    </>
  )
}

export default PreviewPage
