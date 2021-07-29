import React, { useState } from 'react'
import SongDisplayer from './SongDisplayer'
import classes from '../styles/Requester.module.css'

const Requester = () => {
  const [request, setRequest] = useState('')
  const [showRequest, setShowRequest] = useState(false)
  const handleRequest = (e) => {
    setRequest(e.target.value)
  }
  const reset = (e) => {
    setRequest('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowRequest(true)
    reset()
  }
  return (
    <div className={classes.container}>
      <input value={request} onChange={handleRequest} className={classes.field} placeholder='shitty song' />
      <input className={classes.submitBtn} type='submit' onClick={handleSubmit} />
      <div className={classes.requestContainer}>
        <SongDisplayer request={request} showRequest={showRequest} />
      </div>
    </div>

  )
}

export default Requester
