import React from 'react'
import useFetch from './UseFetch'

const UseFetchApp = () => {
  const {request, data, loading, error} = useFetch()
  
  React.useEffect(()=>{
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response,json);
    }
    fetchData()
  }, [request])

  if(error) return <div>{error} </div>
  if(loading) return <div>Carregando...</div>
  if(data)
    return (
      <div>
        {data.map((produto) => <div key={produto.id}><h1>{produto.nome}</h1></div>)}
      </div> 
    )
    else return null
}

export default UseFetchApp