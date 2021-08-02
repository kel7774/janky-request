import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import classes from '../styles/Songs.module.css'

const Songs = ({ index, song, deleteSong }) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className={classes.songContainer}>
      <p key={song.id} className={classes.individualSongs}><span>💩{song.song} requested by 😈{song.requester}</span></p>
      {isAuthenticated && <button onClick={() => deleteSong(song.id)}>done</button>}
    </div>
  )
}

export default Songs
