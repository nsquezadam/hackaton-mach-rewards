import React, {Fragment} from 'react';
import ButtonsNav from '../components/Home/ButtonsNav';
import FooterSaldo from '../components/Home/FooterSaldo';
import HeaderSaldo from '../components/Home/HeaderSaldo';
import HistoryContact from '../components/Home/HistoryContact';

const HomePage = () =>{
  return(
    <Fragment>
      <HeaderSaldo/>
      <ButtonsNav/>
      <HistoryContact/>
      <FooterSaldo/>
    </Fragment>
  )
}

export default HomePage;