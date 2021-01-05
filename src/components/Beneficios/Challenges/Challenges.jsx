import React, {useContext} from 'react';
// import {Button} from '@material-ui/core';
import './Styles/Challenges.css';
import {ContextUser} from '../../../App.js';
import data from '../../../data/users.json';

const Challenges = () => {

  const [user] = useContext(ContextUser);
    return (
      <div className="challengeContainer">
        <section className="challengeIntro">
          <h2>Pequeños desafíos</h2>
          <p>
            Cumple con estos pequeños desafíos e irás acumulando puntos, los que
            podrás canjear por atractivos regalos en tiendas nacionales e
            internacionales.
          </p>
        </section>
        {/*Cards in slide */ }
        <section className="cardContainers">
          {data[user].desafiosprincipales.map((data, index) =>{
            return <div key={index} className="card">
              <div className="cardImage">
              <img src={data.foto} alt="" srcset=""/>
              </div>
              <div className="cardText">
                <div className="points">
                  <p>{data.puntos}</p>
                </div>
                <div className="cardSubtitle">
                  <p>{data.titulo}</p>
                </div>
                <div className="cardExplanation">
                  <p>{data.Explicacion}</p>
                </div>
              </div>
              <button className="btnDesafio">
                {data.textobton}
              </button>
            </div>
          })}
        </section>
        <section className="categories">
          <div className="categoriesIntro">
            <h2>Categorías</h2> 
            <p>Paga con tu tarjeta MACH en cualquiera de estas tiendas y ganarás más puntos, 
              cada categoría tiene puntajes diferentes.</p>
          </div>
          <div className="containerFilters">
            <button className="btonCategorias">
              Todos los desafíos
            </button>
            <button>
              Filtros
            </button>
          </div>
        </section>
        <section className="cardsCategories">
          {data[user].categoriasdesafios.map((data,index)=>{
            return <div key={index} className="challengeCard">
              <div className="challengeImage">
                <img src={data.foto} alt="" srcset=""/>
              </div>
              <div className="challengeText">
                <div className="challengePoints">
                  <p> {data.puntos}</p>
                </div>
                <div className="challengeName">
                  <p> {data.titulo}</p>
                </div>
                <div className="challengeSumary">
                  <p>{data.descripcion}</p>
                </div>
              </div>
            </div>
          })}
        </section>
        <section className="machChallenge">
          <h2>#MACHallenge</h2>
          <p>
          Acepta los desafíos en redes sociales y participa de los sorteos que lanzamos semanalmente.
          Tenemos PREMIOS FABULOSOS para tí.
          </p>

        </section>
      </div>
    );
};

export default Challenges; 