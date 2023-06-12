import React, { useState} from 'react'
import { getInfoContact } from '../../../api/getInfoContact';
import { useNavigate } from "react-router-dom";
import ChatMessage from '../ChatMessage/ChatMessage'
import SearchContact from '../SearchContact/SearchContact';
import './NewMessageSend.scss'


export default function NewMessageSend() {
const navigate = useNavigate();
 if ((localStorage.getItem("IdInstance") && localStorage.getItem("ApiTokenInstance")) === null) {
        navigate('/')
    }
  
  const [number, setNumber] = useState('');
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState({});
  const SearchNum = async(e) => {
    e.preventDefault();
    let res = await getInfoContact(number, localStorage.getItem('IdInstance'), localStorage.getItem('ApiTokenInstance'))
    setShow(true)
    setObj(res);
  }

  return (
    <>
      {show < 1 ?
        <div className='modal-bg'>
        <h3>Написать новое Сообщение</h3>
        <input type="text" placeholder='Введите номер получателя' onChange={(e) => {setNumber(e.target.value)}}/>
        <button type='submit' onClick={(e) => SearchNum(e)}>Send</button>
        </div>
    :  <>
    <div className='substrate'>
        <div className="green-background"></div>
        <div className="wrap">
          <SearchContact />
              <ChatMessage obj={obj} />
       </div>
    </div>
    </> 
    }
    </>
  )
  }






