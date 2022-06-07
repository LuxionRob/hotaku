import { Input } from 'antd'
import { useState } from 'react'
// import propTypes from 'prop-types'
import './style.scss'

function InputBox() {
  const [inputName, setInputName] = useState('')

  const handleInputChange = (e) => {
    setInputName(e.target.value)
    console.log(inputName)
  }

  const onEnter = () => {
    
  }

  return (
    <Input
      value={inputName}
      placeholder='Input name....'
      className='border-1px'
      onChange={handleInputChange}
      onEnter={onEnter}
    />
  )
} 

// InputBox.propTypes = {
  
// }

export default InputBox
