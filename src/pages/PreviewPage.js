import React from 'react'

import Jameson from '../assets/irishwhiskey.png'
import JankyThings from '../assets/janky_things.jpeg';

const PreviewPage = () => {
  return (
    <div className='text-center h-screen p-12 bg-gradient-to-br from-jazzBlue via-jazzPurple to-jazzLightPurp xxs:flex flex-col xxs:justify-around'>
      <section>
        <h1 className='text-white font-bold tracking-widest uppercase'>come on in</h1>
        <img className='janky-things m-auto' src={JankyThings} height='1000px' width='1000px' alt="janky-things" />
      </section>
      <div>
        <h1 className='text-white font-bold tracking-widest uppercase'>bring a friend</h1>
      </div>
      <section>
          <h1 className='text-white font-bold tracking-widest uppercase'>sponsored by:</h1>
          <img className='m-auto' src={Jameson} height='400px' width='400px' alt='Jameson Irish Whiskey' />
      </section>
    </div>
  )
}

export default PreviewPage
