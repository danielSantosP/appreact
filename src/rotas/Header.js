import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'
const Header = () => {
  const location = useLocation()

  React.useEffect(()=>{
    console.log('Mudou a rota')
  }, [location])

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
