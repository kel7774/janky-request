import React, { useState, useEffect } from 'react'
import { useEasybase } from 'easybase-react'
import Songs from '../components/Songs'
import classes from '../styles/PreviewPage.module.css'

const PreviewPage = () => {
  const [easybaseData, setEasybaseData] = useState([])
  const { db } = useEasybase()
  const mounted = async () => {
    const ebData = await db('REQUESTS').return().limit(10).all()
    setEasybaseData(ebData)
  }

  useEffect(() => {
    mounted()
  }, [])
  return (
    <div className={classes.container}>
      <div className={classes.songContainer}>
        <h1>janky requests:</h1>
        {easybaseData.map((song, index) => (
          <Songs
            key={index}
            index={index}
            song={song}
          />
        ))}
      </div>
      <div className={classes.plug}>
        <p><span>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (sup, i need a job).</span></p>
      </div>
    </div>
  )
}

export default PreviewPage
