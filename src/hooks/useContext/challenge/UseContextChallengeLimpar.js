import React from 'react'
import { GlobalContext } from './UseContextChallengeGlobalContext'
const UseContextChallengeLimpar = () => {
const {limparDados} = React.useContext(GlobalContext)
  return (
    <button onClick={()=> limparDados()}>
      Limpar Dados
    </button>
  )
}

export default UseContextChallengeLimpar