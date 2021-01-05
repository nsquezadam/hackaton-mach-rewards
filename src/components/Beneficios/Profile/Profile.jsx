import React, { useContext } from 'react';
import styles from "../Profile/styles/Profile.css";
import { ContextUser } from '../../../App';
import data from '../../../data/users.json';
import Pig from '../../../img/Dinero_ahorrado.png';
import Puño from '../../../img/Puntos_invitar_amigo.png';
import tarjeta from '../../../img/Puntos_tarjeta.png';
import  nextCategory from '../../../img/Puntos_proxima_categoria.png';
import desafio from '../../../img/Desafio_del_dia.png';

const UserProfile = () => {
    const [user] = useContext(ContextUser);
  return (
    <div className="profile">
        <img className="logoBeginner" src={data[user].logoCategoria} alt="logoCategoria"/>
      <div className="container-points">
        <div></div>
        <section className="card">
          <h2>Hasta 50.000 puntos</h2>
          <p>Próxima categoría MACH Explorer</p>
        </section>
        <div>
          <section className="card">
              <img className="foto-desafio" src={desafio}/>
            <h2>Desafío del día</h2>
            <p>Paga una cuenta de servicio con MACH</p>
          </section>
        </div>
      </div>
      <div>
        <button className="boton-historial">Mi historial</button>
      </div>

      <p>Hasta el momento con MACH</p>

      <div class="container">
        <div class="box">
        <img src={Pig} alt="pig"/>
          <h1>$15.000</h1>
          <p>Dinero ahorrado, usando los beneficios MACH</p>
        </div>
        <div class="box">
            <img src={Puño}/>
          <h1>5.000</h1>
          <p>Puntos ganados por invitar amigos</p>
        </div>
        <div class="box">
        <img src={tarjeta}/>
          <h1>3.000</h1>
          <p>Puntos ganados por cargar tu tarjeta MACH</p>
        </div>
        <div class="box">
        <img src={nextCategory}/>
          <h1>20.000</h1>
          <p>Puntos para la próxima categoría</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
