import React, { useState } from 'react'

const ChatWindow = () => {
  const [count,setCount]=useState(0);
  function increment(){
    setCount(c=>c+1);
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ChatWindow;
