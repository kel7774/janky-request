import React from 'react'
import Requester from './Requester'

const MainContent = () => {
  return (
    <div className='background-image flex flex-col text-center'>
      <header className='mt-4 mb-12'>
        <div className>
          <h1 className='text-4xl font-light mb-4'><span className='text-indigo-50'>submit your janky requests</span></h1>
          <h2 className='text-md font-light'><span className='text-indigo-50'>peyton's drunk, just use this</span></h2>
        </div>
      </header>
      <main className>
        <Requester />
      </main>
    </div>
  )
}

export default MainContent
