import React from 'react'

const UseStateModal = ({modal, setModal}) => {
  if(modal === true)
    return (
      <div>
        Esse é um modal.
        <button onClick={()=>setModal(false)}>Fechar</button>
      </div>
    )
  return null
}

export default UseStateModal