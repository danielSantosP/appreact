import React from 'react'

const TextArea = () => {
    const [textarea, setTextarea] = React.useState('')
  
    async function handleSubmit(event){
      event.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit}>
        <textarea value={textarea} onChange={({target})=> setTextarea(target.value) } rows="4"/>
        {textarea}
        <button type="submit">Enviar</button>
      </form> 
    )
}

export default TextArea