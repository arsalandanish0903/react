import React, { useState } from 'react'

function InputField() {
    const [InputField, setInputField] = useState('')

    const inputChange = (e) =>{
        setInputField(e.target.value)
    }
  return (
    <>
        <div>
        <input type="text"
        value={InputField}
        onChange={inputChange}
        placeholder='Type Here.....'
        />
        <p>You Type {InputField}</p>
        </div>
    </>
  )
}

export default InputField