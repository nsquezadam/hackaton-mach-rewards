import React, { useContext, useState } from "react";
import "../Profile/styles/Profile.css";
import { ContextUser } from "../../../App";
import data from "../../../data/users.json";
import Pig from "../../../img/pigBank.svg";
import Puño from "../../../img/puño.svg";
import tarjeta from "../../../img/cardMach.svg";
import nextCategory from "../../../img/mountain.svg";
import ProgressBar from "react-customizable-progressbar";
import imgBoton from "../../../img/Historial_icono.png";
import logoColores from "../../../img/iconpequeno.svg";
import CountUp from "react-countup";
import History from "./History";
import Filter from "../Beneficios/Filter";
import Walkthrough from "./Walkthrough";
import VisibilitySensor from "react-visibility-sensor";
import { TuneRounded } from '@material-ui/icons';

const UserProfile = () => {
  const { userValue, openModal, modalWalkthrough } = useContext(ContextUser);

  const [user] = userValue
  const openModalLocal = openModal
  const [modalHistory, setModalHistory]=useState(false);

  const [valueModalWalkthrough] = modalWalkthrough;

  const [modalProfile, setModalProfile] = useState(false);

  const category = user === 0 ? "MACH Explorer, pasas desde los 50.000 puntos" : "MACH Lover, pasas desde los 300.000 puntos";
  const classPointsChallenge = user === 0 ? "textPointsBegginer" : "textPointsAdventure";
  const classNumberBenefitsProfile = user === 0 ? "numberBenefitsPointsBegginer" : "numberBenefitsPointsAdventure";
  const classPointsProfile = user === 0 ? "pointsProfileBeginner" : "pointsProfileAdventure";
  const colorUser = user === 0 ? '#EE9B00' : '#00EDDF';

  return (
    <div className="profile">
      {valueModalWalkthrough === false ? null: <Walkthrough modalProfile={modalProfile}/>}
      <img
        className="logoBeginner"
        src={data[user].perfil.logoCategoria}
        alt="logoCategoria"
      />
      <div className="containerPointsProfile">
        {/* primera carta */}
        <section className="cardProfile">
          <div className='containerIconInfo'>
            <ProgressBar
              className="progressBar"
              strokeColor={colorUser}
              progress={data[user].perfil.puntos}
              radius={70}
              strokeWidth={10}
              trackStrokeWidth={10}
              initialAnimation="false"
              initialAnimationDelay={0}
              transition="1.5s ease 0.5s"
              steps={100}
            >
              <div className="indicator">
                <span className={classPointsProfile}>{data[user].puntos}</span>
                <div className='containerIconPoints'>
                  <img src={logoColores} alt="" />
                  <span className='textPointsProgressBar'>Puntos</span>
                </div>

              </div>
            </ProgressBar>
          </div>
          <div className="containerTextCardProfile">
            <span className="textNextCategory">Próxima categoría</span>
            <span>{category}</span>
          </div>
        </section>
        {/* segunda carta */}
        <section className="cardProfile">
          <img className="fotoDesafio" src={`${data[user].perfil.fotoDesafio}`} alt="" />
          <div className='containerTextChallenge'>
            <span className={classPointsChallenge}>
              <strong>+3000 </strong>Puntos
            </span>
            <span className="textChallengeDay">Desafío del día</span>
            <span>{data[user].perfil.desafioDelDia}</span>
          </div>

        </section>
      </div>
      <History filter={modalHistory} setFilter={setModalHistory} />
      <div className="containerBenefitsProfile">
        <span className="titleBenefits">Resumen de ganacias</span>
        <span className="textBenefits">
          Revisa las ganancias que has obtenido hasta el momento interactuando con MACH
        </span>
        <div className="containerCardsBefitsProfile">
          <div className="boxProfile">
            <img src={Pig} alt="pig" />
            <CountUp start={0} end={data[user].perfil.dineroAhorrado} delay={0}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div>
                    <span className={classNumberBenefitsProfile}>$</span>
                    <span
                      className={classNumberBenefitsProfile}
                      ref={countUpRef}
                    />
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="textBenefitsProfile">
              Dinero ahorrado, usando los beneficios MACH
            </span>
          </div>
          <div className="boxProfile">
            <img src={Puño} alt="" />
            <div className="containerNumbersCount">
              <CountUp start={0} end={data[user].perfil.puntosAmigos} delay={0}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <div>
                       <span className={classNumberBenefitsProfile}>+</span>
                      <span
                        className={classNumberBenefitsProfile}
                        ref={countUpRef}
                      />
                    </div>
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className='containerLogoPoints'>
              <img className='logoPointsPequeno' src={logoColores} alt="logo" />
              <span className="textBenefitsProfile">
                Puntos ganados por invitar amigos
            </span>
            </div>
          </div>
          <div className="boxProfile">
            <img className='imgTarjetaProfile' src={tarjeta} alt="" />
            <div>
              <span className={classNumberBenefitsProfile}>
                <CountUp
                  start={0}
                  end={data[user].perfil.puntosCarga}
                  delay={0}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div>
                      <span
                        className={classNumberBenefitsProfile}
                        ref={countUpRef}
                      />
                    </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
              </span>
            </div>
            <div className='containerLogoPoints'>
              <img className='logoPointsPequeno' src={logoColores} alt="logo" />
              <span className="textBenefitsProfile">
              Puntos ganados al cargar tu tarjeta
            </span>
            </div>
          </div>
          <div className="boxProfile">
            <img src={nextCategory} alt="" />
            <div>
              <span className={classNumberBenefitsProfile}>
                <CountUp
                  start={0}
                  end={data[user].perfil.puntosProxCategoria}
                  delay={0}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div>
                        <span
                          className={classNumberBenefitsProfile}
                          ref={countUpRef}
                        />
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
              </span>
            </div>
            <div className='containerLogoPoints'>
              <img className='logoPointsPequeno' src={logoColores} alt="logo" />
              <span className="textBenefitsProfile">
              Puntos para la próxima categoría
            </span>
            </div>
          </div>
        </div>
      </div>
      <button className="boton-historial" onClick={() => setModalHistory(!modalHistory)}>
        <img className="iconButtonProfile" src={imgBoton} alt="" />
        Mi historial
      </button>
      <button className="btnSistemaBeneficios" onClick={openModalLocal}>
      Cómo funciona el sistema de beneficios
      </button>
    </div >
  );
};

export default UserProfile;
