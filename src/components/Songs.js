import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import classes from '../styles/Songs.module.css'

const Songs = ({ song, deleteSong }) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className={classes.songContainer}>
      <div className={classes.requestDiv}>
        <p key={song.id} className={classes.individualSongs}><span>{song.song}🎹{' '}</span></p>
        <p className={classes.requester}><span>requested by 😈{' '}{song.requester}</span></p>
      </div>
      {isAuthenticated ? <button onClick={() => deleteSong(song.id)}>done</button> : null}
    </div>
  )
}

export default Songs
