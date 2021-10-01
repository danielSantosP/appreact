import React from 'react'

const Radio = () => {
    const [produto, setProduto] = React.useState('')
    const [cor, setCor] = React.useState('')
  
    async function handleSubmit(event){
      event.preventDefault()
    }

    function handleChange({target}) {
      setProduto(target.value)
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Cores</h2>
        <label>
          <input 
            type="radio"
            value="azul"
            name="cor"
            checked={cor==="azul"}
            onChange={({target}) => setCor(target.value)}
          />
          Azul
        </label>
        <label>
          <input 
            type="radio" 
            value="vermelho" 
            name="cor" 
            checked={cor==="vermelho"} 
            onChange={({target}) => setCor(target.value)} 
          />
          Vermelho
        </label>
        <h2>Produtos</h2>
        <label>
          <input 
            type="radio"
            value="notebook"
            name="produto"
            checked={produto==="notebook"}
            onChange={handleChange}
          />
          Notebook
        </label>
        <label>
          <input 
            type="radio" 
            value="smartphone" 
            name="produto" 
            checked={produto==="smartphone"} 
            onChange={handleChange} 
          />
          Smartphone
        </label>
        <button type="submit">Enviar</button>
      </form> 
    )
}

export default Radio