import { Chat } from "../Pages/chat/chat";

export const getInfoContact = (number,idInstance, apiTokenInstance) => {
 const url = `https://api.green-api.com/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`;
fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({chatId: `${number}@c.us`})
 })
  // const response = res.json(),
  //       result = await response;
  //   Chat 
    .then(res => res.json())
    .then(data => Chat(data))
    .catch(err => console.log(err))
}