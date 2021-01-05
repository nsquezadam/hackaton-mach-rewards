import React from 'react'
import logoPtos from '../../../img/logPtos.svg';
import './styles/pointsWins.css';

const PointsWins = () => {
  return (
    <>
      <h3>Puntos Acumulados</h3>
      <div>
        <div className="container_point_informations">
      <div className="containerLogPtos">
      <img src={logoPtos} alt="logoPtos"/>
      </div>
      </div>
      </div>
      <h5>Categoria Beginner:Hasta 50.000 Puntos</h5>
    </>
  )
}

export default PointsWins
