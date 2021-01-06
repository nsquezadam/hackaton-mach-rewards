import React from 'react';
import './Styles/filterChallenge.css'
import back from '../../../img/back.svg'

const FilterChallenge = (props) => {
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
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Servicios" /> Servicios </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Experiencias" /> Experiencias </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Tecnología" /> Tecnología </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Mascotas" /> Mascotas </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Alimentación" /> Alimentación </label>
            <label className='eachFilterName'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Bienestar" /> Bienestar </label>
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

export default FilterChallenge;