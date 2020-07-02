import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// sina mais + é para indicar literalmente tudo que vem depois da rota para casos que tenha barra no parametro repository
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/repositories/:repository+" exact component={Repository}/>
  </Switch>
)

export default Routes;