import React, {Fragment} from 'react';
import FooterBeneficios from '../components/Beneficios/FooterBeneficios';
import HeaderBeneficios from '../components/Beneficios/HeaderBeneficios';
import NavBar from '../components/Beneficios/NavBar';

const BeneficiosPage = () =>{
  return(
    <Fragment>
      <HeaderBeneficios/>
      <NavBar/>
      <FooterBeneficios/>
    </Fragment>
  )
}

export default BeneficiosPage;