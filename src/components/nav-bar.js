import React from 'react'
import AuthNav from './auth-nav'

const NavBar = () => {
  return (
    <div>
      <nav style={{ bottom: 0, position: 'fixed', right: 0 }}>
        <div><AuthNav /></div>
      </nav>
    </div>
  )
}

export default NavBar
