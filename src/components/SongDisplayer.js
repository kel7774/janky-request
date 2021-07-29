import React from 'react'
import classes from '../styles/Requester.module.css'

const SongDisplayer = ({ request, showRequest }) => {
  return (
    <div className={classes.songContainer}>
      {showRequest && <p className={classes.individualSongs}><span>{request}</span></p>}
    </div>
  )
}

export default SongDisplayer
