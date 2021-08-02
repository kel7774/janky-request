import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import classes from '../styles/Songs.module.css'

const Songs = ({ index, song, deleteSong }) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className={classes.songContainer}>
      <p className={classes.individualSongs}><span>💩{song.songname}</span></p>
      <p className={classes.individualSongs}><span>😈{song.requester}</span></p>
      {isAuthenticated && <button onClick={deleteSong}>done</button>}
    </div>
  )
}

export default Songs
