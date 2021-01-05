import React from 'react';
import './styles/filter.css'
import back from '../../../img/back.svg'

const Filter = (props) => {
  const classToogle = props.filter === true ? 'toggleVisible' : 'toggleHidden';

  console.log(props.filter)
  return (
    <div className='containerFilter'>
      <div className={classToogle}>
        <div className='containerTitleFilter'>
          <img onClick={() => props.setFilter(!props.filter)} src={back} alt="" />
          <span>Filtros</span>
          <span>Limpiar</span>
        </div>
        <span>Tipo de beneficio</span>
        <div className='containerAllFilters'>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Streaming </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Tecnología </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Ropa </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Mascotas </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Comida </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Planes Mobile </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Hogar </label>
          <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Todas las categorías </label>
        </div>

      </div>
    </div>
  );
}

export default Filter;