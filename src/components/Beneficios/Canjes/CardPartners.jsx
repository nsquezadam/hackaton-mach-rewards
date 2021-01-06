import React, {useContext, useState} from 'react'
import  data from '../../../data/users.json'
import './styles/cardPartners.css'
import { ContextUser } from '../../../App';
import FilterCanjes from './FilterCanjes'

import filterIcon from '../../../img/filter.svg'


const CardPartners = (props) => {
  const { userValue } = useContext(ContextUser);
  const [user] = userValue;

  const [filter, setFilter] = useState(false);
  // seleccion segun   usuario  beginner  o adventure

  const [filterMark, setFilterMark] = useState([])

  let buttonFilter=''
  

   // const classContainerDiscount = user === 0 ? 'containerDiscountBegginer' : 'containerDiscountAdventure';
  //const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';


  return (
    <div>
     <div className='containerFiltersCanjes'>
          <div className='containerButtonsFilter'>
            {buttonFilter}
          </div>
          <img src={filterIcon} alt='filter' onClick={() => setFilter(!filter)} />
        </div>
        < FilterCanjes filter={filter} setFilter={setFilter} filterMark={filterMark} setFilterMark={setFilterMark} />
    <div className="containerCanjes">
    {data[user].canjes.map((data, index) => {
      if(filterMark === 0){
      return <div key={index} className="cardPartners" onClick={()=>console.log("click",index)}>
      <div  className="containerImgCategory">
        <img   src={`${data.imgCanje}`} alt="imgCategory"/>
      </div>
      <div className="pointAndLevel">
      <div className="containerLogPtos">
      <img  src={`${data.imgPointCat}`} alt="logoPtos"/>
      </div>
      <h5>{data.pointCategoria}</h5>
      
      </div>
      <div className="containerDetails">
        <h6>{data.categoria}</h6>
        <p>{data.description}</p>
      </div>
  
      </div>
      }else{
        for(let i = 0; i < filterMark.length; i++) {
          if(data.categoria === filterMark[i]){
            return <div key={index} className="cardPartners" onClick={()=>console.log("click",index)}>
      <div  className="containerImgCategory">
        <img   src={`${data.imgCanje}`} alt="imgCategory"/>
      
      </div>
      <div className="pointAndLevel">
      <div className="containerLogPtos">
      <img  src={`${data.imgPointCat}`} alt="logoPtos"/>
      </div>
      <h5>{data.pointCategoria}</h5>
      
      </div>
      <div className="containerDetails">
        <h6>{data.categoria}</h6>
        <p>{data.description}</p>
      </div>
  
      </div>
          }
        }
      }
     

    })}
    </div>
    </div>
  )
}

export default CardPartners
