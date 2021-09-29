import React from 'react'
import Titulo from './ChallengeTitulo'
import Produto from './ChallengeProduto'

const ChallengeProdutos = () => {
  const produtos = [
  {
    nome: 'Notebook',
    propriedades: ['16gb ram', '512gb']
  },
  {
    nome: 'Smartphone',
    propriedades: ['2gb ram', '128gb']
  }
]
  return (
    <section>
      <Titulo texto="Produtos" />
      {
        produtos.map((produto) => {
          return (
            <Produto key={produto.nome} {...produto} />
          )
        })
      }
    </section>
  )
}

export default ChallengeProdutos