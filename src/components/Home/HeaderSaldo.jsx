import React, {useContext} from 'react';
import'./styles/headerSaldo.css'
import data from '../../data/users.json'
import { ContextUser } from '../../App'
import qr from '../../img/qr.svg'
import menu from '../../img/menu.svg'

const HeaderSaldo = () => {

  const [user]= useContext(ContextUser);

  return (
    <header className='containerHeaderSaldo'>
      <section className='containerElementsSaldo'>
        <div>
          <img src={menu} alt='menu'/>
        </div>
        <div className='textSaldo'>
          SALDO <strong>MACH</strong>
        </div>
        <div>
          <img src={qr} alt='qr'/>
        </div>
      </section>
      <section className='numberSaldo'>
        {data[user].saldo}
      </section>
    </header>
  )
}
export default HeaderSaldo;