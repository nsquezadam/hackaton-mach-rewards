import React, { useContext, useState } from 'react';
import './styles/benefits.css';
import { ContextUser } from '../../../App';
import data from '../../../data/users.json'
import filterIcon from '../../../img/filter.svg'
import Filter from './Filter';
import SliderComp from './Slider';
import ModalBenefit from './EachBenefit';
import ModalBenefitGrey from './EachBenefitGray'
import slideIcon from '../../../img/slideIcon.svg'
import bannerExplorer from '../../../img/bannerexplorer.svg';
import bannerLover from '../../../img/bannerlover.svg'


const Benefits = () => {

  const { userValue } = useContext(ContextUser);
  const [user] = userValue

  const [filter, setFilter] = useState(false);
  const [filterMark, setFilterMark] = useState([]);

  const banner = user === 0 ? bannerExplorer : bannerLover;

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
          <img src={filterIcon} alt='filter' onClick={() => setFilter(!filter)} />
          <div className='containerButtonsFilter'>
            {buttonFilter}
          </div>
        </div>
        <Filter filter={filter} setFilter={setFilter} filterMark={filterMark} setFilterMark={setFilterMark} />
        <div className='containerIconAndCards'>
          <img src={slideIcon} alt="" />
          <div className='containerAllCardsBenefits'>
            {data[user].beneficios.map((data, index) => {
              if (filterMark.length === 0) {
                return <ModalBenefit key={index} data={data} />
              }
              else {
                for (let i = 0; i < filterMark.length; i++) {
                  if (data.categoria === filterMark[i]) {
                    return <ModalBenefit key={index} data={data} />
                  }
                }
              }
            })}
          </div>
        </div>
        <div className='containerIconAndCards'>
          <img src={banner} alt="" />
          <div className='containerAllCardsBenefits'>
            {data[user].beneficiosOcultos.map((data, index) => {
              if (filterMark.length === 0) {
                return <ModalBenefitGrey key={index} data={data} />
              }
              else {
                for (let i = 0; i < filterMark.length; i++) {
                  if (data.categoria === filterMark[i]) {
                    return <ModalBenefitGrey key={index} data={data} />
                  }
                }
              }
            })}
          </div>
        </div>

        {user === 0 ? null : <SliderComp />}
      </section>
    </div >
  );
}

export default Benefits;