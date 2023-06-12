import Chat from "../Pages/chat/ChooseNumber";


export const getInfoContact = async (number, idInstance, apiTokenInstance) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`;
  let res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chatId: `${number}@c.us` })
  })
  const response = res.json(),
    result = await response;
  
  return result;

}