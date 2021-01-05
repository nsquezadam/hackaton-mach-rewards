import React, { useState, useContext } from 'react';
import { ContextUser } from '../../App';
import Challenges from './Challenges/Challenges';
import './styles/navBar.css';
import Rewards from '../Beneficios/Canjes/Rewards'
import Profile from "./Profile/Profile";
import Benefits from './Beneficios/Benefits';
import ModalTutorial from './ModalTutorial';

const NavBar = () => {

  const { modalWalktroughtValue, } = useContext(ContextUser);

  const [modalWalktrought] = modalWalktroughtValue;



  // Profile, Benefits, Challenges, Rewards
  const [menuPressed, setMenuPressed] = useState('Profile')

  const menuClicked = (menuClicked) => {
    setMenuPressed(menuClicked)
  }

  const classMenuProfile = menuPressed === 'Profile' ? 'btnMenuActivate' : 'btnMenu';
  const classMenuBenefits = menuPressed === 'Benefits' ? 'btnMenuActivate' : 'btnMenu';
  const classMenuChallenges = menuPressed === 'Challenges' ? 'btnMenuActivate' : 'btnMenu';
  const classMenuRewards = menuPressed === 'Rewards' ? 'btnMenuActivate' : 'btnMenu';

  let reward = '';

  if (menuPressed === 'Challenges') reward = <Challenges/>
  if (menuPressed === 'Profile') reward = <Profile />
  if (menuPressed === 'Benefits') reward = <Benefits/>
  if (menuPressed === 'Rewards') reward = <Rewards/>

  return (
    <section className='containerButtonsNavBeneficios'>
      <nav className='scrollNavBar'>
        <button className={classMenuProfile} onClick={() => menuClicked('Profile')}>Mi perfil</button>
        <button className={classMenuBenefits} onClick={() => menuClicked('Benefits')}>Mis beneficios</button>
        <button className={classMenuChallenges} onClick={() => menuClicked('Challenges')}>Desafíos MACH</button>
        <button className={classMenuRewards} onClick={() => menuClicked('Rewards')}>Canjes MACH</button>
      </nav>
      {/* {modalWalktrought === false ? null : <ModalTutorial/>} */}
      {reward}
    </section>
  );
}

export default NavBar;