import React from 'react'

const Checkbox = ({options, value, setValue, ...props}) => {

  function handleChange({target}){
    if(target.checked){
      setValue([...value, target.value])
    }else{
      setValue(value.filter(val => val !== target.value))
    }
  }

  function handleChecked(item){
    return value.includes(item)
  }

  return (
    <>
      {options.map(option => (
        <label key={option}>
          <input type="checkbox" value={option} checked={handleChecked(option)} onChange={handleChange} {...props}/>
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox