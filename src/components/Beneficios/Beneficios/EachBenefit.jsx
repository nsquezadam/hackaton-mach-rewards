import React, { useState, useContext } from 'react';
import './styles/eachBenefit.css'
import { ContextUser } from '../../../App';
import closeIcon from '../../../img/close.svg';
import present from '../../../img/regalo.svg';

const ModalBenefit = (props) => {

  const { userValue, openModal } = useContext(ContextUser);
  const [user] = userValue

  const categoryBenefit = user === 0 ? 'Beneficio Beginner' : 'Beneficio Advance';
  const classContainerCategoryModal = user === 0 ? 'containerCategoryModalBeginner' : 'containerCategoryModalAdvance';

  const [modalBenefit, setModalBenefit] = useState(false);

  const classContainerDiscount = user === 0 ? 'containerDiscountBegginer' : 'containerDiscountAdventure';
  const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';
  const classWinTitlesModal = user === 0 ? 'winTitlesModalBeginner' : 'winTitlesModalAdventure'

  const [navBarModal, setNavBarModal] = useState('Activar');

  const classMenuActivar = navBarModal === 'Activar' ? 'btnMenuActivateModal' : 'btnMenuModal';
  const classMenuTerminos = navBarModal === 'Terminos' ? 'btnMenuActivateModal' : 'btnMenuModal';

  return (
    <div className='containerEachCard' onClick={() => setModalBenefit(!modalBenefit)}>
      {modalBenefit === false ? null : <div className="modalBenefit">
        <div className="modalContent">
          <img src={closeIcon} alt='closeIcon' className="closeModal" onClick={() => setModalBenefit(false)} />
          <img src={`${props.data.fotoModal}`} alt='closeIcon' className="fotoModal" />
          <div className={classContainerCategoryModal}>
            <img src={present} alt='regalo' />
            <span className='textCategoryBenefit'>{categoryBenefit}</span>
          </div>
          <div className='containerTitlesModal'>
            <span className='titleTitlesModal'>{props.data.nombre}</span>
            <span className={classWinTitlesModal}>$3000 a tu tarjeta</span>
            <span className='textTitlesModal'>Contrata un mes de plan básico y te devolvemos $3.000 a tu cuenta de prepago MACH</span>
          </div>
          <nav className='scrollNavBarModal'>
            <button className={classMenuActivar} onClick={() => setNavBarModal('Activar')}>Cómo activar beneficio</button>
            <button className={classMenuTerminos} onClick={() => setNavBarModal('Terminos')}>Términos y condiciones</button>
          </nav>
          {/* {reward} */}
          <section>
            <span>{props.data.textoActivarBeneficio1}</span>
            <span>1-{props.data.textoActivarBeneficio2}</span>
            <span>2-{props.data.textoActivarBeneficio3}</span>
            <span>3-{props.data.textoActivarBeneficio4}</span>
            <span>4-{props.data.textoActivarBeneficio5}</span>
            <span>5-{props.data.textoActivarBeneficio6}</span>
            <button>Regala a un amigo</button>
          </section>

        </div>
      </div>}
      <img src={`${props.data.foto}`} alt='foto beneficios' />
      <div className='containerInfoBenefit'>
        <div className='containerNameSubjectBenefit'>
          <span className='nameBenefit'>
            {props.data.nombre}
          </span>
          <span className='subjectBenefit'>
            {props.data.texto}
          </span>
        </div>
        <div className='containerDiscountBenefit'>
          <div className={classContainerDiscount}>
            {props.data.descuento}
          </div>
          <span className={classTextGetCoupon}>
            Obtener cupón
          </span>
        </div>
      </div>
    </div>
  );
}

export default ModalBenefit;