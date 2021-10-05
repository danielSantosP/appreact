import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import styles from './Produtos.module.css'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)
  

  const fetchProdutos = React.useCallback( async () => {
    try {
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      if(response.ok){
        const json = await response.json()
        setProdutos(json)
      }
    } catch (error) {
      console.log(error)
      setProdutos(null)
    }
  }, [])

  React.useEffect(() => fetchProdutos(), [fetchProdutos])

  console.log("produtos: ", produtos)

  if(produtos === null) return null
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Descrição do site Ranek" />
      {produtos.map(produto => 
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      )}
    </section>
  )
}

export default Produtos
