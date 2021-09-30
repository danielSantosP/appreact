import React from 'react'

const UseCallbackApp = () => {
  const [contar, setContar] = React.useState(0)

  const handleClick = React.useCallback(() => {
    setContar((contar)=>contar + 1)
  },[])

  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}

export default UseCallbackApp
