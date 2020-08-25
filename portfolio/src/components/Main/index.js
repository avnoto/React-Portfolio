import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';

const Main = () => {
  return (
    <Switch>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>
    </Switch>
  );
};

export default Main;
