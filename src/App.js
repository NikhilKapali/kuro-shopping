import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Hats from './pages/hats/hats';
import ShopPage from './pages/shopPage/shop';

import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
        <Route path='/shop' component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
