import React from 'react'

const titulo = <h1>Esse é um título</h1>

const AulaJsx = () => {
  const random = Math.random()
  const ativo = false

function mostrarNome(sobrenome){
  return 'Daniel ' + sobrenome
}

const carro = {
  marca: 'Ford',
  rodas: 4,
}

const estiloP = {
  color: 'blue',
  fontSize: "2rem"
}

  return (
    <>
      {titulo}
      <p>{true?'sss':'nnn'} - {10}{mostrarNome('Santos')}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo?'ativo':'inativo'}>{(random * 100) / 50}</p>
    </>
  )
    
}

export default AulaJsx;
