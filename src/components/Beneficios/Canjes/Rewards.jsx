import React, {useState} from 'react'
import CardPartners from './CardPartners'
import './styles/rewards.css'
import PointsWins from  './PointsWins'
import FilterCanjes from './FilterCanjes'
import filterIcon from '../../../img/filter.svg'

const Rewards = () => {
  const [filter, setFilter] = useState(false);
  const [filterMark, setFilterMark] = useState([])

  let buttonFilter=''
// seleccion segun   usuario  beginner  o adventure
  // const classContainerDiscount = user === 0 ? 'containerDiscountBegginer' : 'containerDiscountAdventure';
  // const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';

  return (
    <div className="container_rewards">
      <div className="container_rewards_components">
      <div className="container_Ptos_Acumulated">
        <PointsWins />
      </div>
      <div className="container_explication">
      <h5>Canjea tus Puntos </h5>
      <p>Paga con tu tarjeta MACH en cualquiera de estas tiendas y acumula más puntos. Puedes canjear tus puntos en cualquiera de las tiendas asociadas del comercio.</p>
      </div>
      <div className='containerFiltersCanjes'>
          <div className='containerButtonsFilter'>
            {buttonFilter}
          </div>
          <img src={filterIcon} alt='filter' onClick={() => setFilter(!filter)} />
        </div>
      <div>
        < FilterCanjes filter={filter} setFilter={setFilter} filterMark={filterMark} setFilterMark={setFilterMark} />
      </div>
    
      <div className="containerCanjes">
     <CardPartners />
     </div>
      </div>
     
      </div>

  )
}

export default Rewards
