import React from 'react'
import ButtonModal from './hooks/useState/UseStateButtonModal'
import Modal from './hooks/useState/UseStateModal'

const App = () => {

      const [modal, setModal] = React.useState(false)
  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal}/>
    </div>
  )
}
 


export default App