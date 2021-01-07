/* eslint-disable no-lone-blocks */
import React from 'react';
import './styles/filterCanjes.css'
import back from '../../../img/back.svg'


const Filter = (props) => {
  const classToogle = props.filter === true ? 'toggleVisibleCanjes' : 'toggleHiddenCanjes';

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
            <span className='textClearFilter' onClick={()=> console.log('click')} >Limpiar</span>
          </div>
          <span className='textTitleFilterKind'>Tipo de beneficio</span>
          <div className='containerAllFiltersCanjes'>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Bar / Cafeteria" /> Bar / Cafetería </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Tecnologia" /> Tecnología </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Streaming" /> Streaming </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Mascotas" /> Mascotas </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Restaurant" /> Restaurant </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Telefonía" /> Telefonía</label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Hogar" /> Hogar </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Mascotas" /> Mascotas </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Hoteles" /> Hoteles </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Internacional" /> Internacional </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Viajes" /> Viajes </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Aventuras" /> Aventuras </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Deportes" /> Deportes </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Juguetería" /> Juguetería </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Mercadería" /> Mercadería </label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox" value="Banda ancha" /> Banda ancha</label>
            <label className='eachFilterNameCanjes'><input className='eachInputCheckbox' onChange={handleInputChange} type="checkbox"  value="Todas las categorías" /> Todas las categorías </label>
          </div>
          <div className='containerExitFilterCanjes'>
            <span className='textClearFilter' onClick={() => props.setFilter(!props.filter)}>Salir</span>
            <button className='btnFilter' onClick={() => {{props.setFilter(!props.filter)}; enviarDatos()}}>Aplicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;