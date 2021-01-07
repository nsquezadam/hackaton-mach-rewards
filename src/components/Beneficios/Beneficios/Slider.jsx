import React, { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/slider.css';
import Slider from "react-slick";
import beneficios1 from '../../../img/regalabeneficios1.svg'
import beneficios2 from '../../../img/regalabeneficios2.svg'
import beneficios3 from '../../../img/regalabeneficios3.svg'
import beneficios4 from '../../../img/regalabeneficios4.svg'

const SliderComp = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <span className='titleBenefits'>
        Regala Beneficios
        </span>
      <span className='textBenefits'>
        Puedes regalarle a tus amigos algún beneficio que no quieras utilizar.
        </span>
      <span className='textBenefits'>
        ¿Cómo lo puedes hacer?, acá te enseñamos
      </span>
      <Slider {...settings}>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <img src={beneficios1} alt="" />
            <span className='textGift'>
              1. Elige el beneficio que quieres regalar y abrelo, al llegar al final de la descripción estará la opción.
            </span>
          </div>
        </div>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <span className='textGift'>
              2. Copia el link de invitación y dale clic “Regala a un amigo”
            </span>
            <img src={beneficios2} alt="" />
            <span className='textGift'>
              3. Pega el enlace en el chat de  la persona a quien le quieres regalar el beneficio.
            </span>
          </div>
        </div>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <img className='imgBeneficios3' src={beneficios3} alt="" />
            <span className='textGift'>
              4. Tu amigo debe aceptar la invitación y descargar la aplicación.
            </span>
            <span className='textGift'>
              <strong>¡ Automáticamente se abrirá el cupón de regalo!</strong>
            </span>
          </div>
        </div>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <img src={beneficios4} alt="" />
            <span className='textGift'>
                5. No nos alvidamos de tí, al darle tu beneficio a alguien te regalaremos $5.000 en tu tarjeta MACH
            </span>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
}

export default SliderComp;