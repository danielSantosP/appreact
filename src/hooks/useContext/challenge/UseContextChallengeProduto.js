import React from 'react'
import { GlobalContext } from './UseContextChallengeGlobalContext'

const UseContextChallengeProduto = () => {

  const {dados} = React.useContext(GlobalContext)

  if(dados === null) return null
  return (
    <div>
      <h3>Produtos:</h3>
      <ul>
        {dados.map((produto) => 
          <li key={produto.id}>{produto.nome}</li>
        )}
      </ul>
    </div>
  )
}

export default UseContextChallengeProduto