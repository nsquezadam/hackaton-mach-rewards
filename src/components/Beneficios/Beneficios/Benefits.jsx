import React, { useContext, useState } from 'react';
import './styles/benefits.css';
import { ContextUser } from '../../../App';
import data from '../../../data/users.json'
import filterIcon from '../../../img/filter.svg'
import Filter from './Filter';
import SliderComp from './Slider';
import ModalBenefit from './ModalBenefit';


const Benefits = () => {

  const [user] = useContext(ContextUser);

  const [filter, setFilter] = useState(false);
  const [filterMark, setFilterMark] = useState([]);
  const [modalBenefit,setModalBenefit]=useState(false);

	const closeModalBenefit = () => {
    setModalBenefit(false);
    console.log('ola');
    console.log(modalBenefit);
  }
  
  const classContainerDiscount = user === 0 ? 'containerDiscountBegginer' : 'containerDiscountAdventure';
  const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';

  let buttonFilter = ''

  if (filterMark.length === 0) {
    buttonFilter = <div className=''>
      <button className='buttonFilter'>
        Todos los beneficios
      </button>
    </div>
  }
  else {
    buttonFilter = filterMark.map((data, index) => {
      return <div key={index} className=''>
        <button className='buttonFilter'>
          {data}
        </button>
      </div>
    })
  }
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
              return <div key={index} className='containerEachCard' onClick={() => setModalBenefit(!modalBenefit)}>
                {modalBenefit === false ? null : <ModalBenefit close={closeModalBenefit} />}
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
                  return <div key={index} className='containerEachCard' onClick={() => setModalBenefit(true)}>
                    {modalBenefit === false ? null :<ModalBenefit close={closeModalBenefit}/>}
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
        {user === 0 ? null : <SliderComp />}
      </section>
    </div>
  );
}

export default Benefits;