import React from 'react';
import { Link } from 'react-router-dom'
import home from '../../img/home.svg';
import transferir from '../../img/transferir.svg';
import tarjeta from '../../img/tarjeta.svg';
import servicios from '../../img/servicios.svg';
import beneficios from '../../img/beneficios.svg'
import './styles/footerBeneficios.css'

const FooterBeneficios = () => {
  return (
    <section className='containerFooterSaldo'>
      <div className='containerElementsFooterSaldo'>
        <Link className='containerLinks' to='/home'>
          <div className='containereEachElementFooterSaldo'>
            <img src={home} alt='home' />
            <span className='textFooter'>
              Inicio
            </span>
          </div>
        </Link>
        <div className='containereEachElementFooterSaldo'>
          <img src={transferir} alt='transferir' />
          <span className='textFooter'>
            Transferir
          </span>
        </div>
        <div className='containereEachElementFooterSaldo'>
          <img src={tarjeta} alt='tarjeta' />
          <span className='textFooter'>
            Tarjetas
          </span>
        </div>
        <div className='containereEachElementFooterSaldo'>
          <img src={servicios} alt='servicios' />
          <span className='textFooter'>
            Servicios
          </span>
        </div>
        <div className='containereEachElementFooterSaldo'>
          <img src={beneficios} alt='beneficios' />
          <span className='textFooter textFooterPressed'>
            Beneficios
          </span>
        </div>
      </div>
    </section >
  );
}

export default FooterBeneficios;