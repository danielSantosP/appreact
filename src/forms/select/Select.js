import React from 'react'

const Select = () => {
    const [select, setSelect] = React.useState('')
  
    async function handleSubmit(event){
      event.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit}>
        <select id="produtos" value={select} onChange={({target})=> setSelect(target.value) }>
          <option disabled value="">Selecione um valor</option> {/*força o usuario a marcar alguma outra opção*/}
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        {select}
        <button type="submit">Enviar</button>
      </form> 
    )
}

export default Select