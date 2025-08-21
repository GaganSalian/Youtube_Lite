import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) + ' 🥳',
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="flex flex-col h-[500px] max-h-[50vh] w-full border border-gray-300 rounded-md overflow-hidden">
      {/* Messages container */}
      <div className="flex-1 flex flex-col-reverse overflow-y-auto p-2 bg-gray-100">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      {/* Input form */}
      <form
        className="flex w-full border-t border-gray-300 p-2 gap-2 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.trim() === '') return;
          dispatch(
            addMessage({
              name: 'Gagan Salian',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
          placeholder="Write a message..."
        />
        <button
          type="submit"
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
