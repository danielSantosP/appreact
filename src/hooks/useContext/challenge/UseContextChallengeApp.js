import React from 'react'
import Produto from './UseContextChallengeProduto'
import {GlobalStorage} from './UseContextChallengeGlobalContext'
import Limpar from './UseContextChallengeLimpar'

const UseContextChallengeApp = () => {

  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  )
}

export default UseContextChallengeApp