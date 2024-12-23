import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomNames, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

    const [liveMessage,setLiveMessage]=useState("")

    const dispatch=useDispatch()

    const chatMessages=useSelector((store)=>store.chat.messages)

    useEffect(()=>{
       const i = setInterval(()=>{

        console.log("Api Polling");
        dispatch(addMessage({
            name:generateRandomNames(),
            message:makeRandomMessage(20)+"🥳",
        }))

        },1500)
        return ()=>clearInterval(i)
    },[])
  return (
    <>
    <div className='ml-2 w-full h-[500px] p-2 border border-black  bg-gray-100 flex flex-col-reverse overflow-y-scroll  '>
      <div>
      {chatMessages.map((c,i)=>(<ChatMessage
      key={i}
        name={c.name}
        message={c.message}

      />))}
      </div>
      
    </div>
    <form className='w-full ml-2 p-2 border border-black ' onSubmit={(e)=>{
        console.log("sumit",liveMessage)
        e.preventDefault();
        dispatch(addMessage({
            name:"Gagan salian",
            message:liveMessage
        }))
        setLiveMessage("")
    }}>
        <input className='w-96 border border-black px-2' type='text' value={liveMessage}  onChange={(e)=>{
            setLiveMessage(e.target.value);
        }}/>
        <button className='px-2 mx-2 bg-gray-200'>Send</button>
      </form>
    </>
  )
}

export default LiveChat
