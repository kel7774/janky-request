import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'

import {db, auth} from '../firebase.config';
import Songs from '../components/Songs';

const SongListingScreen = ({ songs }) => {
  const [open, setOpen] = React.useState(false)
  const [canDelete, setCanDelete] = React.useState(false)

  const [user] = useAuthState(auth)

  const deleteSong = id => {
    db.collection('requests').doc(id).delete()
  }

  const getAdminClaim = () => user.getIdTokenResult().then(idTokenResult => {
    if(idTokenResult.claims.admin) {
      setCanDelete(true)
    } else {
      setCanDelete(false)
    }
  })
  
  return (
    <div className="text-center h-screen p-12">
      <div className='flex flex-col m-zeroAuto w-72'>
        <h1>your requests</h1>
        <section>
          {songs.map((song, index) => (
            <Songs song={song} key={index} deleteSong={deleteSong} canDelete={canDelete} getAdminClaim={getAdminClaim} open={open} setOpen={setOpen} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default SongListingScreen
