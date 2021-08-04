import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Requester from './Requester'
import classes from '../styles/App.module.css'

const MainContent = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

  return (
    <div>
      <header>
        {
          isTabletOrMobile &&
          isTabletOrMobileDevice
            ? (
              <div className={classes.mobileDescription}>
                <div className={classes.mobilePlug}>
                  <p>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (hire me!)</p>
                </div>
                <h1 className={classes.title}><span className={classes.span}>the janky piano show presents: janky requests</span></h1>
                <h2 className={classes.subtitle}><span className={classes.span}>because without this, peyton's shit at remembering</span></h2>
                <strong className={classes.mobileSponsor}>sponsored by:</strong>
                <img src='irishwhiskey.png' height={90} width={90} alt='sponsored by jameson' />
              </div>)
            : (
              <div className={classes.description}>
                <div className={classes.plug}>
                  <p>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (sup, i need a job).</p>
                </div>
                <div className={classes.footer}>
                  <p className={classes.sponsored}>
                    <strong>sponsored by:</strong>
                  </p>
                  <img src='irishwhiskey.png' height={150} width={200} alt='sponsored by jameson' />
                </div>
                <h1 className={classes.title}><span className={classes.span}>the janky piano show presents: janky requests</span></h1>
                <h2 className={classes.subtitle}><span className={classes.span}>because without this, peyton's shit at remembering</span></h2>
              </div>)
        }
      </header>
      <main className={classes.main}>
        <Requester />
      </main>
    </div>
  )
}

export default MainContent
