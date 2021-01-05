import React from 'react'
import logoPtos from '../../../img/logPtos.svg';
import imgCategory from '../../../img/catBarCafeteria.svg'
//import  allData from '../../../data/users.json'
import './styles/cardPartners.css'

const CardPartners = () => {

//   const [SwapsCards, setSwapsCards] = useState([]);

// useEffect(() => {
//   const fetchData = async() => {
//  await fetch(allData)
//  .then((response)=> response.json())
// .then((data)=>{
//   console.log(data)
//   return setSwapsCards(data)
// } )

// // .catch((error)=> console.log('error:', error))
// }
// fetchData()
//   }, [])

  


  return (
    <>
    <div className="cardPartners">
    <div className="containerImgCategory">
      <img src={imgCategory} alt="imgCategory"/>
    </div>
    <div className="containerLogPtos">
      <img src={logoPtos} alt="logoPtos"/>
    </div>
    <div className="containerDetails">
      <h6>Bar/Cafetería</h6>
      <p>Más de 20 locales para Disfrutar</p>
    </div>

    </div>
    </>
  )
}

export default CardPartners
