import React from 'react'

const Checkbox = () => {
    const [termos, setTermos] = React.useState(false)
    const [cores, setCores] = React.useState(['azul'])
  
    async function handleSubmit(event){
      event.preventDefault()
    }

    function handleChange({target}){
      if(target.checked){
        setCores([...cores, target.value])
      } else {
        setCores(cores.filter((cor) => cor !== target.value))
      }
    }

    function handleChecked(cor){
      return cores.includes(cor)
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Checkbox com 1 item</h2>
        <label>
          <input 
            type="checkbox"
            value="termos"
            checked={termos}
            onChange={({target}) => setTermos(target.checked)}
          />
          Aceito os termos.
        </label>
        <h2>Checkbox com 2 itens</h2>
        <label>
          <input 
            type="checkbox"
            value="azul"
            checked={handleChecked('azul')}
            onChange={handleChange}
          />
          Azul.
        </label>
        <label>
          <input 
            type="checkbox"
            value="vermelho"
            checked={handleChecked('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
        <button type="submit">Enviar</button>
      </form> 
    )
}

export default Checkbox