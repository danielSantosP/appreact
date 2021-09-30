import React from 'react'
import { GlobalContext } from './UseContextGlobalContext'

const Produto = () => {

  const {contar, adicionarUm, adicionarDois} = React.useContext(GlobalContext)

  
  return (
    <div>
      <h3>Produto: {contar}</h3>
      <button style={{marginRight: '1rem'}} onClick={()=> adicionarUm()}>Adicionar Um</button>
      <button onClick={()=> adicionarDois()}>Adicionar Dois</button>
    </div>
  )
}

export default Produto