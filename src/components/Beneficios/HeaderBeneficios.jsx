import React from 'react';
import './styles/headerBeneficios.css'
import question from '../../img/question.svg'

const HeaderBeneficios = () => {
  return (
    <header className='containerHeaderBeneficios'>
      <div className='containerElementsBeneficios'>
        <span className='textHeaderBeneficios'>
          Beneficios
        </span>
        <img src={question} alt='question'/>
      </div>
    </header>
  );
}

export default HeaderBeneficios;