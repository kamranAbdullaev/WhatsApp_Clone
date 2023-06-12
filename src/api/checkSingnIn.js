export const checkSignInMethod = async (idInstance,apiTokenInstance) => {
  // let url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`
  let url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
  const response = await fetch(url, {
    method: 'GET',
  });
  let result = await response.json(); 
  return result;
}