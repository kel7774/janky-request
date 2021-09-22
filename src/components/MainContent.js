import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Requester from './Requester'

const MainContent = () => {
  return (
    <div>
      <header>
        <div className>
          <div className>
            <p>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (hire me!)</p>
          </div>
          <h1 ><span className>the janky piano show presents: janky requests</span></h1>
          <h2 className><span>because without this, peyton's shit at remembering</span></h2>
          <strong className>sponsored by:</strong>
        </div>
        <div className>
          <div className>
            <p>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a></p>
          </div>
          <h1 className><span className>the janky piano show presents: janky requests</span></h1>
          <h2 className><span className>because without this, peyton's shit at remembering</span></h2>
        </div>
      </header>
      <main className>
        <Requester />
      </main>
    </div>
  )
}

export default MainContent
