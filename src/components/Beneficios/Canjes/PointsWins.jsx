import React,{useContext} from 'react'
import logoPtos from '../../../img/logPtos.svg';
import './styles/pointsWins.css';
import { ContextUser } from '../../../App';
import  data from '../../../data/users.json'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const PointsWins = () => {
  const { userValue } = useContext(ContextUser);

  const [user]= userValue
  
  const classContainerPointWin= user === 0 ? 'container_point_informationsBegginer' : 'container_point_informationsAdventure';

 // const classContainerPointWin = user === 0 ? 'container_point_informationsBegginer' : 'container_point_informationsAdventure';
  //const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';

  return (
    <>  
       <h3>Puntos por canjear</h3>
        <div className={classContainerPointWin}>
      <div className="containerLogPtos">
      <img src={logoPtos} alt="logoPtos"/>
      <CountUp start={0} end={data[user].puntosPorCanjear} duration={2} delay={0.5}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} ><h4>{data[user].puntosPorCanjear} </h4></span>
                </VisibilitySensor>
              )}
            </CountUp>
      </div>
      </div>
      <h5>{data[user].descTipoNivelPuntos}</h5>
    </>
  )
}

export default PointsWins

