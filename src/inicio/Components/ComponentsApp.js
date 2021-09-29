import React from 'react'
import Footer from './inicio/Components/Footer'
import Form from './inicio/Components/Form/Form';
import Header from './inicio/Components/Header'

const Teste = () => {
  const active = false
  if(active){ 
    return <p>Teste</p>
  }else{
    return null
  }
}

const ComponentsApp = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  )
};

export default ComponentsApp;