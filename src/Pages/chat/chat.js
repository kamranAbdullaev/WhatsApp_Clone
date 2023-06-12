import React, {useState,useEffect} from 'react'
import SearchContact from './SearchContact/SearchContact';
import ChatMessage from './ChatMessage/ChatMessage';
import './chat.scss';

export const Chat = (data) => {
  console.log(data)
  return (
    <>
    <div className='substrate'>
        <div className="green-background"></div>
      <div className="wrap"> 
       <SearchContact />
       <ChatMessage /> 
       </div>
    </div>
    </>
  )
}
