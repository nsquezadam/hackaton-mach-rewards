import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeneficiosPage from './pages/BeneficiosPage';


export const ContextUser = createContext(null);

function App() {

  const [user, setUser] = useState(0);
  console.log(setUser);
  return (
    <Router>
      <Switch>
        <Route path="/beneficios" exact>
          <ContextUser.Provider value={[user]}>
            <BeneficiosPage />
          </ContextUser.Provider>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
