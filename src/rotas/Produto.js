import React from 'react'
import { useLocation, useParams } from 'react-router'

const Produto = () => {
  const params = useParams()
  const location = useLocation()
  console.log(params)
  console.log(location)
  const search = new URLSearchParams(location.search)
  console.log(search.get('sdv'))
  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  )
}

export default Produto
