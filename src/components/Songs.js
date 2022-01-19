import React from 'react'
import {Button, Modal} from 'semantic-ui-react'
import {useAuthState} from 'react-firebase-hooks/auth'

import {auth} from '../firebase.config'

const Songs = ({ song, deleteSong }) => {
  const [open, setOpen] = React.useState(false)
  const [canDelete, setCanDelete] = React.useState(false)
  const [user] = useAuthState(auth)

  const getAdminClaim = () => user.getIdTokenResult().then(idTokenResult => {
    if(idTokenResult.claims.admin) {
      setCanDelete(true)
    } else {
      setCanDelete(false)
    }
  })

  const deleteASong = () => {
    deleteSong(song.id)
    setOpen(false)
  }

  React.useEffect(() => {
    getAdminClaim()
  });

  return (
    <>
      <section className='flex flex-row justify-center items-start'>
        <p>"{song.song}" requested by <span className='font-semibold'>{song.requester}</span></p>
        {canDelete ? <button onClick={() => setOpen(true)}>🗑 delete</button> : null}
      </section>
      <Modal dimmer size='mini' onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>delete a request</Modal.Header>
        <Modal.Content>are you sure you want to delete this request?</Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} className=''>cancel</Button>
          <button onClick={() => deleteASong()} className='bg-jazzPurple rounded text-indigo-50 font-semibold border-2 border-jazzPurple w-28 cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzPurple duration-300 ease-in' >ok</button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default Songs
