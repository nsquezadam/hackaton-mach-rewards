import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeneficiosPage from './pages/BeneficiosPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


export const ContextUser = createContext(null);

function App() {
  const [user, setUser] = useState(0);
  const [modalWalkthrough,setModalWalkthrough]=useState(false)

  const openModal=()=>{
    setModalWalkthrough(true)
  }
  const closeModal=()=>{
    setModalWalkthrough(false)
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ContextUser.Provider value={[setUser]}>
            <LoginPage />
          </ContextUser.Provider>
        </Route>
        <Route path="/home" exact>
          <ContextUser.Provider value={{userValue:[user], openModal:openModal, closeModal:closeModal}}>
            <HomePage />
          </ContextUser.Provider>
        </Route>
        <Route path="/beneficios" exact>
          <ContextUser.Provider value={{userValue:[user], openModal:openModal, closeModal:closeModal, modalWalkthrough:[modalWalkthrough]}}>
            <BeneficiosPage />
          </ContextUser.Provider>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
