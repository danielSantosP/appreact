import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={{color: 'red'}} end>Home</NavLink>{' | '}
      <NavLink to="sobre"> Sobre</NavLink>{' | '}
      <NavLink to="contato" activeStyle={{color: 'green'}}> Contato</NavLink>{' | '}
      <NavLink to="login" activeStyle={{color: 'blue'}}> Login</NavLink>{' | '}
    </nav>
  )
}

export default Header
