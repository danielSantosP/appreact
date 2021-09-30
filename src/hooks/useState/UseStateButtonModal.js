import React from 'react'

const UseStateButtonModal = ({setModal}) => {

  function handleClick(){
    setModal((ativo) => !ativo)
  } 

  return  <button onClick={handleClick}>Abrir</button>
}

export default UseStateButtonModal