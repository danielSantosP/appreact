import React from 'react'

const App = () => {
  const [form, setForm] = React.useState({nome: '', email: ''})
  
    function handleSubmit(event){
      event.preventDefault()
    }

    function handleChange({target}){
      const {id, value} = target
      setForm({...form, [id]:value})
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" value={form.nome} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form> 
    )
}

export default App