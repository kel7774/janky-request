import React from 'react'
import classes from '../styles/Songs.module.css'

const Songs = ({ index, song, removeSong }) => {
  return (
    <div className={classes.songContainer}>
      <p className={classes.individualSongs}><span>💩{song}💩</span></p>
      <button onClick={() => removeSong(index)}>remove</button>
    </div>
  )
}

export default Songs
