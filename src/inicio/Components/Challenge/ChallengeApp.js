import React from 'react'
import Header from './inicio/Components/Challenge/ChallengeHeader'
import Home from './inicio/Components/Challenge/ChallengeHome'
import Produtos from './inicio/Components/Challenge/ChallengeProdutos'

const ChallengeApp = () => {
  const {pathname} = window.location
  let Pagina = pathname === '/produtos'? Produtos : Home
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  ) 
}

export default ChallengeApp;
