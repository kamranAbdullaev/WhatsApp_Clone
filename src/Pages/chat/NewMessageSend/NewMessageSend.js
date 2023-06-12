import React, { useState, useEffect } from 'react'
import { getInfoContact } from '../../../api/getInfoContact';
import { useNavigate } from "react-router-dom";
import './NewMessageSend.scss'

export default function NewMessageSend() {
  const navigate = useNavigate();
  useEffect(() => {
    if ((localStorage.getItem("IdInstance") && localStorage.getItem("ApiTokenInstance")) === null) {
        navigate('/')
    } else {
    }
  })

 const [number, setNumber] = useState('')
  function SearchNum(e) {
    e.preventDefault();
    getInfoContact(number, localStorage.getItem('IdInstance'), localStorage.getItem('ApiTokenInstance'))
    navigate('/chat')
  }

  return (
    <>
      <div className='modal-bg'>
        <h3>Написать новое Сообщение</h3>
        <input type="text" placeholder='Введите номер получателя' onChange={(e) => {setNumber(e.target.value)}}/>
        <button type='submit' onClick={(e) => SearchNum(e)}>Send</button>
      </div>
    </>
  )
}






