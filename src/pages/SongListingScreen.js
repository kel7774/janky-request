import React from 'react';
import {db} from '../firebase.config';
import Songs from '../components/Songs';

const SongListingScreen = ({ songs }) => {
  const deleteSong = id => {
    db.collection('requests').doc(id).delete()
  }
  
  return (
    <div className="text-center h-full p-12">
      <h1>your requests</h1>
      <section>
        {songs.map((song, index) => (
          <Songs song={song} key={index} deleteSong={deleteSong} />
        ))}
      </section>
    </div>
  )
}

export default SongListingScreen
