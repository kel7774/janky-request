import React, { useState, useEffect } from 'react'
import { useEasybase } from 'easybase-react'
import Songs from './Songs'
import classes from '../styles/Requester.module.css'

const Requester = () => {
  const [easybaseData, setEasybaseData] = useState([])
  const { db } = useEasybase()
  console.log(easybaseData)
  const [songs, setSongs] = useState([])
  const [value, setValue] = useState('')

  const mounted = async () => {
    const ebData = await db('REQUESTS').return().limit(15).all()
    setEasybaseData(ebData)
  }

  useEffect(() => {
    mounted()
  }, [])

  const addSong = (song) => {
    const newSong = [...songs, song]
    setSongs(newSong)
  }

  const deleteSong = async () => {
    await db('REQUESTS').delete().one()
  }
  // const removeSong = index => {
  //   const newSong = [...songs]
  //   newSong.splice(index, 1)
  //   setSongs(newSong)
  // }

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    setValue('')
  }

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
            className={classes.field}
            placeholder='shitty song'
          />
          <input className={classes.submitBtn} type='submit' />
        </form>
      </div>
      <div className={classes.requestContainer}>
        {easybaseData.map((song, index) => (
          <Songs
            key={index}
            index={index}
            song={song}
            deleteSong={deleteSong}
            // addASong={addASong}
          />
        ))}
      </div>
    </>
  )
}

export default Requester
