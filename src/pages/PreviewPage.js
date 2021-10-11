import React from 'react'
import JankyThings from '../assets/janky_things.jpeg';

const PreviewPage = () => {
  return (
    <div className='text-center bg-gradient-to-br from-jazzBlue via-jazzPurple to-jazzLightPurp h-screen'>
      <img className='janky-things m-auto p-12' src={JankyThings} height='900px' width='900px' alt="janky-things" />
      <section>
        <h1 className='text-white font-bold tracking-widest uppercase'>about</h1>
      </section>
    </div>
  )
}

export default PreviewPage
