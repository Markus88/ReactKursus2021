import React, { useState } from 'react'

function MyName (){
  const [ name, setName ] = useState('')

  function handleChange (someName: { target: { value: React.SetStateAction<string> } }) 
  {
    setName(someName.target.value)
  }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button></button>
    </div>
  )
}

export default MyName