import React, { useState } from 'react';
import './styles/filterCanjes.css'
import back from '../../../img/back.svg'


const Filter = (props) => {
  const classToogle = props.filter === true ? 'toggleVisible' : 'toggleHidden';

  const handleInputChange = (event) => {
    props.setFilterMark([...props.filterMark, event.target.value])
  }

  const enviarDatos = () => {
    console.log(props.filterMark)
  }

  return (
    <div className='containerFilter'>
      <div className={classToogle}>
        <div className='containerElementsFilter'>
          <div className='containerTitleFilter'>
            <img onClick={() => props.setFilter(!props.filter)} src={back} alt="" />
            <span className='textTitleFilter'>Filtros</span>
            <span className='textClearFilter'>Limpiar</span>
          </div>
          <span className='textTitleFilterKind'>Tipo de beneficio</span>
          <div className='containerAllFilters'>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="BarCafetería" /> Bar / Cafetería </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Tecnología" /> Tecnología </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="streamin" /> streamin </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Mascotas" /> Mascotas </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Comida" /> Comida </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Planes Mobile" /> Planes Mobile </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Hogar" /> Hogar </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Todas las categorías" /> Todas las categorías </label>
          </div>
          <div className='containerExitFilter'>
            <span className='textClearFilter' onClick={() => props.setFilter(!props.filter)}>Salir</span>
            <button className='btnFilter' onClick={() => {{props.setFilter(!props.filter)}; enviarDatos()}}>Aplicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;