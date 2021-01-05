import React, {useContext} from 'react'
import  data from '../../../data/users.json'
import './styles/cardPartners.css'
import { ContextUser } from '../../../App';

const CardPartners = (props) => {
  console.log(props)
  const [user] = useContext(ContextUser)

  return (
    <>
  
    {data[user].canjes.map((data, index) => {
      return <div key={index} className="cardPartners" onClick={()=>console.log("click",index)}>
      <div  className="containerImgCategory">
        <img   src={`${data.imgCanje}`} alt="imgCategory"/>
      
      </div>
      <div className="containerLogPtos">
      <img  src={`${data.imgPointCat}`} alt="logoPtos"/>
      <h5>{data.pointCategoria}</h5>
      </div>
      <div className="containerDetails">
        <h6>{data.categoria}</h6>
        <p>{data.description}</p>
      </div>
  
      </div>
     

    })}
 
    </>
  )
}

export default CardPartners
