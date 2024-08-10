import React, { Children } from 'react'
import "./button.css"

const Button = ({Children, action}) => {
  return (
    <div onClick={action} className='Mbutton'>{Children}</div>
  )
}

export default Button