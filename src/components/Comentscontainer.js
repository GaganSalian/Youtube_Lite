import React from 'react'

const commentsData=[
    {
        name:"Gagan Salian",
        text:"hello huymikin dumikin hello hanny banni",
        replies:[]
    },
    {
        name:"Gagan Salian",
        text:"hello huymikin dumikin hello hanny banni",
        replies:[
            {
                name:"Gagan Salian",
                text:"hello huymikin dumikin hello hanny banni",
                replies:[ {
                    name:"Gagan Salian",
                    text:"hello huymikin dumikin hello hanny banni",
                    replies:[]
                },]
            },
        ]
    },
    {
        name:"Gagan Salian",
        text:"hello huymikin dumikin hello hanny banni",
        replies:[ {
            name:"Gagan Salian",
            text:"hello huymikin dumikin hello hanny banni",
            replies:[]
        },]
    },
    {
        name:"Gagan Salian",
        text:"hello huymikin dumikin hello hanny banni",
        replies:[{
            name:"Gagan Salian",
            text:"hello huymikin dumikin hello hanny banni",
            replies:[{
                name:"Gagan Salian",
                text:"hello huymikin dumikin hello hanny banni",
                replies:[]
            },]
        },]
    },
    {
        name:"Gagan Salian",
        text:"hello huymikin dumikin hello hanny banni",
        replies:[]
    },
]


const Comment=({data})=>{
    const {name,text,replies}=data;
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
    <img className='w-10 h-10'
     alt="user " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s'/>
    <div className='px-3 '>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
    </div>

    </div>;
}


const CommentsList=({comments})=>{
        return   comments.map((comment,index)=>(
        <div key={index}>
             <Comment  data={comment}/>
             <div className='pl-5 border border-l-black ml-5'>
             <CommentsList comments={comment.replies}/>
        </div>
        </div>
       ))
      }

const Comentscontainer = () => {
  return (
    <div className='m-2  p-2 w-[560px]'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default Comentscontainer;
