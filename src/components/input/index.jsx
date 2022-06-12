import { Input } from 'antd'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { SearchOutlined  } from '@ant-design/icons'
import './style.scss'

const InputBox = ({ className }) => {
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
      bordered={false}
      placeholder='Input name....'
      className={`py-6 mr-6 ${className}`}
      suffix={ <SearchOutlined /> }
      onChange={handleInputChange}
      onEnter={onEnter}
    />
  )
} 

InputBox.defaultProps = {
  className: "",
}

InputBox.propTypes = {
  className: PropTypes.string,
}

export default InputBox
