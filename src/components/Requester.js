import React from 'react'
import SongDisplayer from './SongDisplayer'
import classes from '../styles/Requester.module.css'

const Requester = () => {
  return (
    <div className={classes.container}>
      <input className={classes.field} placeholder='shitty song' />
      <input className={classes.submitBtn} type='submit' />
      <div className={classes.requestContainer}>
        <SongDisplayer />
      </div>
    </div>

  )
}

export default Requester
