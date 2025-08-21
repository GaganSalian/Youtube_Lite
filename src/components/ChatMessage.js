import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start p-2 gap-2 w-full">
      <img
        className="h-10 w-10 rounded-full flex-shrink-0"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
      />
      <div className="flex flex-col">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-sm break-words">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
