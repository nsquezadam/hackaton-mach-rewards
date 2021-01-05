import React from 'react';
import { Link } from 'react-router-dom'
import transferir from '../../img/transferir.svg';
import tarjeta from '../../img/tarjeta.svg';
import servicios from '../../img/servicios.svg';
import beneficiosNuevos from '../../img/beneficiosNuevo.svg';

const FooterSaldo = () => {
  return (
    <section className='containerFooterSaldo'>
      <div className='containerElementsFooterSaldo'>
        <div className='containereEachElementFooterSaldo'>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='iconPressed' fillRule="evenodd" clipRule="evenodd" d="M16 6.67421V17.9979H1C0.734784 17.9979 0.48043 18.1034 0.292893 18.2911C0.105357 18.4789 2.23988e-08 18.7335 2.23988e-08 18.999C2.23988e-08 19.2645 0.105357 19.5191 0.292893 19.7068C0.48043 19.8945 0.734784 20 1 20H16C16.5304 20 17.0391 19.7891 17.4142 19.4136C17.7893 19.0381 18 18.5289 18 17.9979V6.67421C18 6.34468 17.9188 6.02024 17.7636 5.72966C17.6083 5.43909 17.3838 5.19137 17.11 5.00848L10.11 0.336648C9.78134 0.117143 9.39509 0 9 0C8.6049 0 8.21866 0.117143 7.89 0.336648L0.89 5.00848C0.616168 5.19137 0.391665 5.43909 0.23641 5.72966C0.0811558 6.02024 -4.92386e-05 6.34468 2.23988e-08 6.67421V14.9948C2.23988e-08 15.2603 0.105357 15.5149 0.292893 15.7027C0.48043 15.8904 0.734784 15.9959 1 15.9959C1.26522 15.9959 1.51957 15.8904 1.70711 15.7027C1.89464 15.5149 2 15.2603 2 14.9948V6.67421L9 2.00237L16 6.67421ZM8.447 7.1547C8.60788 7.03785 8.80338 6.97861 9.002 6.98653C9.167 6.98164 9.32985 7.02494 9.47067 7.11116C9.61149 7.19737 9.72419 7.32277 9.795 7.47203L12.899 13.7525C12.9562 13.853 12.9905 13.9649 12.9993 14.0801C13.0081 14.1954 12.9913 14.3112 12.95 14.4192C12.9126 14.5293 12.8523 14.6302 12.773 14.7151C12.6937 14.8 12.5972 14.867 12.49 14.9117C12.2813 15.0051 12.0455 15.018 11.828 14.9478L11.821 14.9458L11.814 14.9428C11.7056 14.9071 11.6056 14.85 11.5197 14.7748C11.4338 14.6997 11.3638 14.608 11.314 14.5053L9 9.82547L6.687 14.5073C6.58346 14.7118 6.4045 14.868 6.188 14.9428L6.178 14.9468C5.95828 15.0222 5.71779 15.0085 5.508 14.9087C5.30083 14.8142 5.13866 14.6426 5.056 14.4302L5.052 14.4192C5.01171 14.3122 4.99444 14.1978 5.00133 14.0836C5.00823 13.9694 5.03912 13.858 5.092 13.7565L8.198 7.47203C8.25542 7.34844 8.34106 7.24008 8.448 7.1557L8.447 7.1547Z" fill="#999999" />
          </svg>
          <span className='textFooter textFooterPressed'>
            Inicio
          </span>
        </div>
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
          <Link className='containerLinks' to='/beneficios'>
            <img className='imgBeneficiosNuevos' src={beneficiosNuevos} alt='beneficiosNuevos' />
            <span className='textFooter'>
              Beneficios
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FooterSaldo;