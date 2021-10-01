import React from 'react'
import Input from './forms/components/Form/Input'
import Radio from './forms/components/Form/Radio'
import Select from './forms/components/Form/Select'
import Checkbox from './forms/components/Form/Checkbox'

const CheckboxApp = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [fruta, setFruta] = React.useState('')
  const [linguagens, setLinguagens] = React.useState([])
  const [termos, setTermos] = React.useState([])
    return (
      <form>
        <h2>Termos</h2>
        <Checkbox options={['Li e aceito os termos']} value={termos} setValue={setTermos} />
        <h2>Checkbox</h2>
        <Checkbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens} />
        <h2>Cores</h2>
        <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
        <h2>Frutas</h2>
        <Radio options={['Limão', 'Laranja', 'Uva']} value={fruta} setValue={setFruta} />
        <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />
        <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
        <Input id="email" label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form> 
    )
}

export default CheckboxApp