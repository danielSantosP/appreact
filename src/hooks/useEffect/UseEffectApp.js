import React from 'react'
import Produto from './hooks/useEffect/UseEffectProduto'

const UseEffectApp = () => {
  const [produto, setProduto] = React.useState(null)

  function handleClick({target}){
    setProduto(target.innerText)
  }

  React.useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal){
      setProduto(produtoLocal)
    }
  },[])
  
  React.useEffect(()=>{
    if(produto){
      window.localStorage.setItem('produto', produto)
    }
  },[produto])

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{marginRight: '1rem'}} onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      {produto && <Produto produto={produto} />}
    </div>
  )
}

export default UseEffectApp