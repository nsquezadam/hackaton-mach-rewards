import React, { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/slider.css';
import Slider from "react-slick";

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
        ¿Cómo lo puedes hacer?
        </span>
      <Slider className='containerSlider' {...settings}>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <img src="" alt="" />
            <span className='textGift'>
              ¡ Y regálale tu beneficio a alguno de tus amigos para que lo disfrute !
              </span>
          </div>
        </div>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <img src="" alt="" />
            <span className='textGift'>
              ¡ Y regálale tu beneficio a alguno de tus amigos para que lo disfrute !
            </span>
          </div>
        </div>
        <div className='containerEachGift'>
          <div className='containerElementsGift'>
            <img src="" alt="" />
            <span className='textGift'>
              ¡ Y regálale tu beneficio a alguno de tus amigos para que lo disfrute !
            </span>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
}

export default SliderComp;