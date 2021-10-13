import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import Songs from '../components/Songs';
import {db, logout, auth} from '../firebase.config'
import stonks from '../assets/stonks.png';

const Requests = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const [song, setSong] = React.useState('')
  const [requester, setRequester] = React.useState('')

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");

    fetchUserName();
  }, [user, loading]);

  function useSongs () {
    const [songs, setSongs] = React.useState([])
    React.useEffect(() => {
      db.collection('requests')
        .onSnapshot(snapshot => {
          const lists = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          setSongs(lists)
        })
    }, [])
    return songs
  }

  const addSong = (e) => {
    e.preventDefault()
    db.collection('requests').add({
        song,
        requester
    })
    setSong('')
    setRequester('')
  }

  const deleteSong = id => {
    db.collection('requests').doc(id).delete()
  }

  const songs = useSongs()
  return (
    <div className="text-center h-full p-12">
      <button className='p-6 border-4'>login</button>
      <button className="p-6 border-4" onClick={logout}>
          Logout
        </button>
        <img src={stonks} alt="purchase stonks" height='1000px' width='1000px' className='stonks m-auto rounded-lg' />
      <div className='peyton-intro'>
        <h1>that's peyton</h1>
        <h1>he's probably drunk</h1>
      </div>
      <h1>wanna hear a song? click here</h1>
      <form onSubmit={addSong}>
        <div className='flex flex-col w-40 text-indigo-50 m-zeroAuto'>
          <input
            type='text'
            className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue  h-10 my-8 pl-3 rounded-xl placeholder-indigo-50'
            value={requester}
            onChange={e => setRequester(e.target.value)}
            placeholder='name'
          />
          <input
            type='text '
            className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue  h-10 mb-8 pl-3 rounded-md placeholder-indigo-50'
            value={song}
            onChange={e => setSong(e.target.value)}
            placeholder='song'
          />
        <input className='bg-jazzLightPurp border-2 border-jazzLightPurp rounded-md w-28 uppercase cursor-pointer p-2 hover:bg-indigo-50 hover:text-jazzLightPurp duration-300 ease-in' type='submit' />
        </div>
      </form>
      <div className='requestContainer'>
        {songs.map((song, index) => (
          <Songs
            key={index}
            index={index}
            song={song}
            deleteSong={deleteSong}
          />
        ))}
      </div>
    </div>
  )
}

export default Requests;
