import React, { useContext } from "react";
import { ContextUser } from "../../../App";
import "./styles/cardSubCategoriaAdventure.css";
import data from "../../../data/users.json";
import closeBlack from "../../../img/closeBlack.svg";
//import PointWins from './PointsWins'

const CardSubCategoria = (props) => {

  const classToogleAdventure =
    props.adventureSubcat === true
      ? "toggleVisibleSubCategory"
      : "toggleHiddenSubCategory";
  const { userValue } = useContext(ContextUser);
  const [user]= userValue
  const classBegginerCardSwapsSubcat =
    user === 0 ? "classBegginerPointsDetail" : "classAdventurePointsDetail";
  const classTextCanjear =
    user === 0 ? "textCanjearBeginner" : "textCanjearAdventure";

  return (
    <div className={classToogleAdventure}>
      <div className="containerModalSub">
      
        {data[user].detalleSubCategoriaCanjeAventuras.map((data, index)=>{
          return <div key={index}  className="headerModalCanjesSubCat"> 
           <img
          className="imaCloseBack"
          onClick={() => props.setadventureSubcat(!props.adventureSubcat)}
          src={closeBlack}
          alt="close"
        />
           <div className="containerImgSubCat">
          <img src={`${data.imgAventurasSubCat}`} alt="Aventuras"/>
          </div>
        <div className="containerTitleAndDescription">
          <h4 className="tituloSub" >{data.nameTitle}</h4>
          <p className="descripcionSub" >{data.descripcionAventurasSubCat}</p>
        </div>
        </div>
        })}
       
      <div className="containerscroll">
      <div className="containerAllSubCat">
        {data[user].subCategoriaCanjes.map((data, index) => {
          return (
            <div key={index} className="containerCardSubcategory">
              <div className="containerImgSubCategory">
                <img src={`${data.img}`} alt="insub" />
              </div>
              <div className="containerDetailsSubCatg">
                <h5>{data.title}</h5>
                <div className="pointsAndLevelSubCategory">
                  <div className="containerLogPtosSubCategory">
                    <img src={`${data.imgPointCat}`} alt="logoPtos" />
                  </div>
                  <h6 className={classBegginerCardSwapsSubcat}>
                    {data.points}
                  </h6>
                </div>
                <div className="descriptionSubCategory">
                  <p>{data.description} </p>
                </div>
                <p className={classTextCanjear}>Canjear</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </div>
  );
};

export default CardSubCategoria;
