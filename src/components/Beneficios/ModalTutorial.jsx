import React,{useContext} from 'react';
import './styles/modalTutorial.css';
import { ContextUser } from '../../App';

const ModalTutorial = () => {

  const { modalWalktroughtValue } = useContext(ContextUser);
  const [setModalWalktrought] = modalWalktroughtValue;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="closeModal" onClick={setModalWalktrought(false)}>X</span>
        <p className="modal-text">Te redireccionaremos a nuestra plataforma de donaciones para recibir tu aporte. </p>
        <p className="modal-text">¡Muchas gracias!</p>
        <a href="https://yodono.cl/donar/207" target='_blanck'>
          <button onClick={setModalWalktrought(false)} className="btn-modal" >
            {" "}
          IR A YODONO.CL{" "}
          </button>
        </a> */}
      </div>
    </div>
  );
}

export default ModalTutorial;