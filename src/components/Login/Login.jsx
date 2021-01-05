import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/login.css'
import { ContextUser } from '../../App'
import huella from '../../img/huella.svg'

let pinUser = '';

const Login = () => {
  const [setUser] = useContext(ContextUser);
  const pinFalse = ['o', 'o', 'o', 'o'];
  const [pin, setPin] = useState(pinFalse)
  const machLetters = ['M', 'A', 'C', 'H'];
  const changeRoute = useHistory()


  const clickPin = (number) => {
    pinUser = pinUser + number
    let newArr = [...pin]
    newArr[pinUser.length - 1] = machLetters[pinUser.length - 1]
    setPin(newArr)
    if (pinUser === '1234') {
      setUser(0);
      changeRoute.push("/home");
      pinUser='';
    }
    if (pinUser === '5678') {
      setUser(1);
      changeRoute.push("/home");
      setPin(pinFalse);
      pinUser='';
    }
  }

  return (
    <div className='containerLogin'>
      <div className='containerPinUp'>
        <span className='textLogin'>
          Ingresa tu PIN
        </span>
        <div className='containerSecretPin'>
          <span className='eachNumberPin'>{pin[0]}</span>
          <span className='eachNumberPin'>{pin[1]}</span>
          <span className='eachNumberPin'>{pin[2]}</span>
          <span className='eachNumberPin'>{pin[3]}</span>
        </div>
      </div>
      <div className='containerNumbers'>
        <div className='rowNumbers'>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(1)}>1</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(2)}>2</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(3)}>3</button>
        </div>
        <div className='rowNumbers'>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(4)}>4</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(5)}>5</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(6)}>6</button>
        </div>
        <div className='rowNumbers'>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(7)}>7</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(8)}>8</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(9)}>9</button>
        </div>
        <div className='rowNumbers'>
          <button className='btnNumberLogin pulse'>bor</button>
          <button className='btnNumberLogin pulse' onClick={() => clickPin(0)}>0</button>
          <button className='btnNumberLogin pulse'>
            <img src={huella} alt='huella'/>
          </button>
        </div>
      </div>
      <div className='containerPinDown'>
        <span className='textLogin'>
          Olvidé mi PIN
        </span>
      </div>
    </div>
  );
};

export default Login