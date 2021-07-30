import React, { useState } from 'react'
import Songs from './Songs'
import classes from '../styles/Requester.module.css'

const Requester = () => {
  const [songs, setSongs] = useState([])
  const [value, setValue] = useState('')

  const addSong = (song) => {
    const newSong = [...songs, song]
    setSongs(newSong)
  }
  const removeSong = index => {
    const newSong = [...songs]
    newSong.splice(index, 1)
    setSongs(newSong)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addSong(value)
    setValue('')
  }

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
            className={classes.field}
            placeholder='shitty song'
          />
          <input className={classes.submitBtn} type='submit' />
        </form>
      </div>
      <div className={classes.requestContainer}>
        {songs.map((song, index) => (
          <Songs
            key={index}
            index={index}
            song={song}
            addSong={addSong}
            removeSong={removeSong}
          />
        ))}
      </div>
    </>
  )
}

export default Requester
