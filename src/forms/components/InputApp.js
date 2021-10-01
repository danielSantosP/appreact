import React from 'react'
import Input from './forms/components/Form/Input'

const InputApp = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
    return (
      <form>
        <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
        <Input id="email" label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form> 
    )
}

export default InputApp