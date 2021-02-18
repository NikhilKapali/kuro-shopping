import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Hats from './pages/hats/hats';
import ShopPage from './pages/shopPage/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
        <Route path='/shop' component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
