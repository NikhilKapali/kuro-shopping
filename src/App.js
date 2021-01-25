import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Hats from './pages/hats/hats'
function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
        </Switch>
    </div>
  );
}

export default App;
