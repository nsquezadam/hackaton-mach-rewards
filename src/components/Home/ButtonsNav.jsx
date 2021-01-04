import React from 'react';
import './styles/buttonsNav.css'

const ButtonsNav = () =>{
  return(
    <section className='containerButtonsNav'>
      <button className='buttonNav'> 
        Recarga y retira
      </button>
      <button className='buttonNav'>
        Ver movimientos
      </button>
    </section>
  );
}

export default ButtonsNav;