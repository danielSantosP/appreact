import React from 'react'

const UseRefApp = () => {
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()

  const [comentarios, setComentarios] = React.useState([])
  const [input, setInput] = React.useState('')
  const inputElement = React.useRef()

  function handleInputClick(){
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus()
  }

  function handleClick(){
    setCarrinho(carrinho + 1)
    setNotificacao('item adicionado ao carrinho')
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(()=> {
      setNotificacao(null)
    }, 2000)
  }

  return (
    <div>
      <ul>
        <ul>
          {comentarios.map(comentario => 
            <li key={comentario}>{comentario}</li>
          )}
        </ul>
        <input type="text" value={input} onChange={({target})=>setInput(target.value)} ref={inputElement} />
        <br />
        <button onClick={handleInputClick}>Enviar</button>
      </ul>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar carrinho {carrinho}</button>
    </div>
  )
}

export default UseRefApp