import React from 'react'
import Produto from './hooks/useEffect/UseEffectProduto'

const UseEffectApp = () => {
  const [ativo, setAtivo] = React.useState(false)

  React.useEffect(()=>{

    function handleScroll(event){
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <div>
      {ativo && <Produto />}
      <button onClick={()=>setAtivo(!ativo)}>Ativar</button>
    </div>
  )
}

export default UseEffectApp