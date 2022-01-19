import React from 'react';
import {db} from '../firebase.config';
import Songs from '../components/Songs';

const SongListingScreen = ({ songs }) => {
  const deleteSong = id => {
    db.collection('requests').doc(id).delete()
  }
  
  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <h1>your requests</h1>
        <section>
          {songs.map((song, index) => (
            <Songs song={song} key={index} deleteSong={deleteSong} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default SongListingScreen
