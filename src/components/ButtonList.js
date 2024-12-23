import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
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
