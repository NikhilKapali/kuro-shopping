import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Hats from './pages/hats/hats';
import ShopPage from './pages/shopPage/shop';

import Header from './components/header/header';

import SignInandSignUp from './pages/sign_in_sign_up/sign_in_sign_up';
import { auth } from './firebase/firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInandSignUp} />
          <Route path='/shop' component={ShopPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
