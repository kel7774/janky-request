import React from 'react'
import Songs from '../components/Songs'
import classes from '../styles/PreviewPage.module.css'

const PreviewPage = () => {
  return (
    <div className={classes.container}>
      <Songs />
      <div className={classes.plug}>
        <p><span>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (sup, i need a job).</span></p>
      </div>
    </div>
  )
}

export default PreviewPage
