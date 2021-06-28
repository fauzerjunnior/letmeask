import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewRoom from '../pages/NewRoom';
import Room from '../pages/Room';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
    </Switch>
  );
};

export default Routes;
