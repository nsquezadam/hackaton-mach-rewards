import React, { useContext } from "react";
import  "../Profile/styles/Profile.css";
import { ContextUser } from "../../../App";
import data from "../../../data/users.json";
import Pig from "../../../img/Dinero_ahorrado.png";
import Puño from "../../../img/Puntos_invitar_amigo.png";
import tarjeta from "../../../img/Puntos_tarjeta.png";
import nextCategory from "../../../img/Puntos_proxima_categoria.png";
import desafio from "../../../img/Desafio_del_dia.png";
import ProgressBar from "react-customizable-progressbar";
import imgBoton from "../../../img/Historial_icono.png";
import logoColores from "../../../img/logoCuatrocolores.png";

const UserProfile = () => {
  const [user] = useContext(ContextUser);
  return (
    <div className="profile">
      <img
        className="logoBeginner"
        src={data[user].logoCategoria}
        alt="logoCategoria"
      />
      <div className="container-points">
        <section className="card">
            <p className="text">Puntos</p>
          <ProgressBar
            className="progressBar"
            strokeColor="#EE9B00"
            progress={40}
            radius={40}
            strokeWidth={10}
            trackStrokeWidth={10}
          />
          <h2>
            <img src={logoColores} alt="" />
            Hasta 50.000 puntos
          </h2>
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
        <button className="boton-historial">
          <img src={imgBoton} alt="" />
          Mi historial
        </button>
      </div>

      <p>Hasta el momento con MACH</p>

      <div className="container">
        <div className="box">
          <img src={Pig} alt="pig" />
          <h1>$15.000</h1>
          <p>Dinero ahorrado, usando los beneficios MACH</p>
        </div>
        <div className="box">
          <img src={Puño} />
          <h1>
            <img src={logoColores} alt="" />
            5.000
          </h1>
          <p>Puntos ganados por invitar amigos</p>
        </div>
        <div className="box">
          <img src={tarjeta} />
          <h1>
            <img src={logoColores} alt="" />
            3.000
          </h1>
          <p>Puntos ganados por cargar tu tarjeta MACH</p>
        </div>
        <div className="box">
          <img src={nextCategory} />
          <h1>
            <img src={logoColores} alt="" />
            20.000
          </h1>
          <p>Puntos para la próxima categoría</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
