import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useAuth0 } from '@auth0/auth0-react'
import classes from '../styles/Songs.module.css'

const Songs = ({ song, deleteSong }) => {
  const { isAuthenticated } = useAuth0()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 767px)' })
  return (
    <div>
      <div className={classes.requestDiv}>
        {
          isTabletOrMobile &&
          isTabletOrMobileDevice
            ? (
              <p key={song.id} className={classes.mobileIndividualSongs}><span>{song.song}🎹{' '}</span></p>)
            : (
              <p key={song.id} className={classes.individualSongs}><span>{song.song}🎹{' '}</span></p>
              )
        }
        <p className={classes.requester}><span>requested by 😈{' '}{song.requester}</span></p>
      </div>
      {isAuthenticated ? <button onClick={() => deleteSong(song.id)}>done</button> : null}
    </div>
  )
}

export default Songs
