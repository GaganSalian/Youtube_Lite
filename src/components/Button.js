import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className='p-2 px-4 m-2 rounded-lg bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
