import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Songs = ({ song, deleteSong }) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className>
      <div className>
        <p key={song.id} className><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue'>{song.song}🎹{' '}</span></p>
        <p className><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue'>requested by 😈{' '}{song.requester}</span></p>
      </div>
      {isAuthenticated ? <button onClick={() => deleteSong(song.id)}>done</button> : null}
    </div>
  )
}

export default Songs
