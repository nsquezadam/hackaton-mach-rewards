import React, { useContext, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/benefits.css';
import { ContextUser } from '../../../App';
import data from '../../../data/users.json'
import Slider from "react-slick";
import filterIcon from '../../../img/filter.svg'
import Filter from './Filter';


const Benefits = () => {

  const { userValue } = useContext(ContextUser);
  const [user] = userValue;

  const [filter, setFilter] = useState(false);
  const [filterMark, setFilterMark] = useState([])

  const classContainerDiscount = user === 0 ? 'containerDiscountBegginer' : 'containerDiscountAdventure';
  const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';

  let buttonFilter=''

  if(filterMark.length===0){
    buttonFilter=<div className=''>
    <button className='buttonFilter'>
      Todos los beneficios
    </button>
  </div>
  }
  else{
    buttonFilter=filterMark.map((data, index) => {
    return <div key={index} className=''>
      <button className='buttonFilter'>
        {data}
      </button>
    </div>
  })
}

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='containerBenefits'>
      <section className='containerTextBenefits'>
        <span className='titleBenefits'>
          Beneficios MACH
        </span>
        <span className='textBenefits'>
          Descubre los todos los beneficios que tenemos para tí, los que puedes utilizar en el comercio nacional e internacional.
        </span>
        <div className='containerFiltersBenefit'>
          <div className='containerButtonsFilter'>
            {buttonFilter}
          </div>
          <img src={filterIcon} alt='filter' onClick={() => setFilter(!filter)} />
        </div>
        <Filter filter={filter} setFilter={setFilter} filterMark={filterMark} setFilterMark={setFilterMark} />
        <div className='containerAllCardsBenefits'>
          {data[user].beneficios.map((data, index) => {
            if (filterMark.length === 0) {
              return <div key={index} className='containerEachCard'>
                <img src={`${data.foto}`} alt='foto beneficios' />
                <div className='containerInfoBenefit'>
                  <div className='containerNameSubjectBenefit'>
                    <span className='nameBenefit'>
                      {data.nombre}
                    </span>
                    <span className='subjectBenefit'>
                      {data.texto}
                    </span>
                  </div>
                  <div className='containerDiscountBenefit'>
                    <div className={classContainerDiscount}>
                      {data.descuento}
                    </div>
                    <span className={classTextGetCoupon}>
                      Obtener cupón
                  </span>
                  </div>
                </div>
              </div>
            }
            else {
              for (let i = 0; i < filterMark.length; i++) {
                if (data.categoria === filterMark[i]) {
                  return <div key={index} className='containerEachCard'>
                    <img src={`${data.foto}`} alt='foto beneficios' />
                    <div className='containerInfoBenefit'>
                      <div className='containerNameSubjectBenefit'>
                        <span className='nameBenefit'>
                          {data.nombre}
                        </span>
                        <span className='subjectBenefit'>
                          {data.texto}
                        </span>
                      </div>
                      <div className='containerDiscountBenefit'>
                        <div className={classContainerDiscount}>
                          {data.descuento}
                        </div>
                        <span className={classTextGetCoupon}>
                          Obtener cupón
                  </span>
                      </div>
                    </div>
                  </div>
                }
              }
            }
          })}
        </div>
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
      </section>
    </div>
  );
}

export default Benefits;