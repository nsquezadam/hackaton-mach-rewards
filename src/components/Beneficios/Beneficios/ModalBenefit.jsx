import React from 'react';
import './styles/modalBenefit.css'
import closeIcon from '../../../img/close.svg'

const ModalBenefit = (props) => {
  return (
    <div className="modalBenefit">
      <div className="modalContent">
        <img src={closeIcon} alt='closeIcon' className="closeModal" onClick={props.close}/>

    
      </div>
    </div>
  );
}

export default ModalBenefit;