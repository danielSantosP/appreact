import React from 'react'

const coresArray = ['azul','roxo','laranja','verde','vermelho','cinza']

const CheckboxChallenge = () => {
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
        {coresArray.map((cor, index) => 
          <label key={index} style={{textTransform: 'capitalize'}}>
            <input type="checkbox" value={cor} checked={handleChecked(cor)} onChange={handleChange} />
            {cor}
          </label>
        )}
        <button type="submit">Enviar</button>
      </form> 
    )
}

export default CheckboxChallenge