import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './signIn.scss'
import { checkSignInMethod } from '../../api/checkSingnIn';
import { useNavigate } from "react-router-dom";
/* 
1101829345
26883f5bbade4b7c9441dc9279b44bb81dcd7a3c3fe941c88d
*/
function SignIn(props) {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [stateInstance, setStateInstance] = useState('');
  const navigate = useNavigate();

  const singIn = async () => {
    try {
      let res = await checkSignInMethod(inputOne, inputTwo);
      switch (res.stateInstance) {
        case "authorized":
          setStateInstance('Аккаунт авторизован')
          navigate("/new-message");
          break;
        case 'notAuthorized':
          setStateInstance('Аккаунт не авторизован')

          break;
        case 'blocked':
          setStateInstance('Аккаунт авторизован')

          break;
        case 'sleepMode':
          setStateInstance('Аккаунт ушел в спящий режим.')
          break;
        case 'starting':
          setStateInstance('Аккаунт в процессе запуска (сервисный режим)')
          break;
        
        default:
          break;
      }
      localStorage.setItem("IdInstance", inputOne);
      localStorage.setItem("ApiTokenInstance", inputTwo);
    } catch (err) {
      setStateInstance('Вы ввели не правильные данные!')
    }
  };

  return (
    <div className='sign-in'>
      <form className='signIn-form'>
        {stateInstance === '' ? null : 
          <div className="alert alert-primary" role="alert">
            {stateInstance}
        </div>
        }
        <label htmlFor="" className="form-label">Введите IdInstance:</label>
        <input type="text" className="form-control" value={inputOne} onChange={(e) => setInputOne(e.target.value)} />
        <label htmlFor="" className="form-label">Введите ApiTokenInstance:</label>
        <input type="text" className="form-control" value={inputTwo} onChange={(e) => setInputTwo(e.target.value)}/>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="button" onClick={singIn}>Button</button>
          </div>
      </form>
    </div>
  );
}

export default SignIn;