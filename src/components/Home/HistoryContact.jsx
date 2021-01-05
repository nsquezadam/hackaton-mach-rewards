import React, { useContext } from 'react';
import './styles/historyContact.css';
import data from '../../data/users.json'
import { ContextUser } from '../../App'

const HistoryContact = () => {
  const {userValue} = useContext(ContextUser);
  
  const [user] = userValue;

  return (
    <section className='containerHistoryContact'>
      {data[userValue].comentariosHome.map((data, index) => {
        return <div key={index} className='containerEachHistoryContact'>
          <div className='containerElementsHistoryContact'>
            <div className='containerImgName'>
              <img src={`${data.foto}`} alt='contact' className='imgContact' />
              <div className='containerContactSubject'>
                <span className='nameContact'>
                  {data.nombre}
                </span>
                <span className='subjectHistory'>
                  {data.mensaje}
                </span>
              </div>
            </div>
            <span className='dateHistory'>
              {data.fecha}
            </span>
          </div>
        </div>

      })}
    </section>
  );
}

export default HistoryContact;