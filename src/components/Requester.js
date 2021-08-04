import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import db from '../firebase.config'
import Songs from './Songs'
import classes from '../styles/Requester.module.css'

const Requester = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 767px)' })

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
    <>
      <div className={classes.container}>
        <form onSubmit={addSong}>
          {
            isTabletOrMobile &&
            isTabletOrMobileDevice
              ? (
                <div className={classes.mobileInputContainer}>
                  <input
                    type='text'
                    className={classes.fieldMobile}
                    value={requester}
                    onChange={e => setRequester(e.target.value)}
                    placeholder='this person'
                  />
                  <input
                    type='text'
                    className={classes.fieldMobile}
                    value={song}
                    onChange={e => setSong(e.target.value)}
                    placeholder='wants to hear...'
                  />
                  <input className={classes.submitBtn} type='submit' />
                </div>)
              : (
                <div>
                  <input
                    type='text'
                    className={classes.field}
                    value={requester}
                    onChange={e => setRequester(e.target.value)}
                    placeholder='this person'
                  />
                  <input
                    type='text'
                    className={classes.field}
                    value={song}
                    onChange={e => setSong(e.target.value)}
                    placeholder='wants to hear...'
                  />
                  <input className={classes.submitBtn} type='submit' />
                </div>
                )
          }
        </form>
      </div>
      {
        isTabletOrMobile &&
        isTabletOrMobileDevice
          ? (
            <div className={classes.requestContainerMobile}>
              {songs.map((song, index) => (
                <Songs
                  key={index}
                  index={index}
                  song={song}
                  deleteSong={deleteSong}
                />
              ))}
            </div>)
          : (
            <div className={classes.requestContainer}>
              {songs.map((song, index) => (
                <Songs
                  key={index}
                  index={index}
                  song={song}
                  deleteSong={deleteSong}
                />
              ))}
            </div>)
      }
    </>
  )
}

export default Requester
