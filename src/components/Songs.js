import React from 'react'

const Songs = ({ song, deleteSong }) => {
  return (
      <section className='flex flex-row justify-center items-start'>
        <p key={song.id} className><span className=''>🎹{' '}"{song.song}"</span></p>
        <p className='flex flex-row'>requested by: <p className='font-semibold'>{song.requester}</p></p>
        <button onClick={() => deleteSong(song.id)}>✅ done</button>
      </section>
  )
}

export default Songs
