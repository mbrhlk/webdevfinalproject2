import React from 'react'
import '../styles/header.scss'

import logo from '../img/logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Header