import React from 'react'
// import firebase from 'firebase'
import {Button, Modal} from 'semantic-ui-react'

const Songs = ({ song, deleteSong }) => {
  const [open, setOpen] = React.useState(false)
  // const [hidden, setHidden] = React.useState(true)

//   firebase.auth().currentUser.getIdTokenResult(true)
//   .then((idTokenResult) => {
//   if (idTokenResult.claims.admin) {
//     setHidden(!hidden);
//   } else {
//     setHidden(hidden);
//   }
// }).catch((error) => {
//   console.log(error);
// });


  const deleteASong = () => {
    deleteSong(song.id)
    setOpen(false)
  }

  return (
    <>
      <section className='flex flex-row justify-center items-start'>
        <p>"{song.song}" requested by <span className='font-semibold'>{song.requester}</span></p>
        <button onClick={() => setOpen(true)}>🗑 delete</button>
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
