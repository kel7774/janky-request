import React from 'react'

const Songs = ({ song, deleteSong }) => {
  return (
    <div className>
      <div className>
        <p key={song.id} className><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue'>{song.song}🎹{' '}</span></p>
        <p className><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue'>requested by 😈{' '}{song.requester}</span></p>
      </div>
      <button onClick={() => deleteSong(song.id)}>done</button>
    </div>
  )
}

export default Songs
