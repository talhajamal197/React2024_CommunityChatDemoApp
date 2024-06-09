import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';
import { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <h1>ChatGPT UI</h1>
      <ChatWindow/>
   </div>
  );
}

export default App;
