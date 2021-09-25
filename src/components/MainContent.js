import React from 'react'
import Requester from './Requester'

const MainContent = () => {
  return (
    <div className='flex flex-col text-center'>
      <header className='mt-4 mb-12'>
        <div className>
          <h1 className='text-4xl font-light text-indigo-50'><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue'>the janky piano show presents: janky requests</span></h1>
          <h2 className='text-md font-light text-indigo-50'><span className='bg-gradient-to-r from-jazzPurple via-jazzLightPurp to-jazzBlue'>because without this, peyton's shit at remembering</span></h2>
        </div>
      </header>
      <main className>
        <Requester />
      </main>
    </div>
  )
}

export default MainContent
