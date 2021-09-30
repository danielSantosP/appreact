import React from 'react'
import Produto from './UseContextProduto'
import {GlobalStorage} from './UseContextGlobalContext'

const UseContextApp = () => {

  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default UseContextApp