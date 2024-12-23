import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-2 items-center'>
                <img className='h-10 pr-1' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s'/>


                <span className='font-bold px-2'>{name}</span>
                <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
