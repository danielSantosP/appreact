import React from 'react'

const ChallengeProduto = ({nome, propriedades }) => {
  return (
    <div style={{border: '1px solid', margin: '1rem', padding: '1rem' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade)=>(
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChallengeProduto