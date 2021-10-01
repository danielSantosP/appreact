import React from 'react'

const Select = ({options, value, setValue, ...props}) => {
  
  function handleChange({target}){
    setValue(target.value)
  }

  return (
    <select value={value} onChange={handleChange} {...props}>
      <option value="" disabled>Selecione uma opção</option>
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  )
}

export default Select