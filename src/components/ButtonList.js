import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto space-x-2 py-2 px-2 scrollbar-hide'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Music"/>
      <Button name="Restaurants"/>
      <Button name="Naruto"/>
      <Button name="Road Racing"/>
      <Button name="Sports bike"/>
      <Button name="Podcasts"/>
      <Button name="News"/>
    </div>
  )
}

export default ButtonList
