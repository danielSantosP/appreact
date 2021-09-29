import React from 'react'

function handleScroll(event){
  console.log(event)
}

window.addEventListener('scroll', handleScroll)

const Eventos = () => {
  return (
    <div style={{height: '200vh'}}>
      <button onClick={(event) => alert(event.target.innerText)}>Clique</button>
    </div>
  )
};

export default Eventos;