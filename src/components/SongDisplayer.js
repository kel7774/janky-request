import React from 'react'
import classes from '../styles/Requester.module.css'

const SongDisplayer = () => {
  return (
    <div className={classes.songContainer}>
      <p className={classes.individualSongs}><span>✨ song request ✨</span></p>
    </div>
  )
}

export default SongDisplayer
