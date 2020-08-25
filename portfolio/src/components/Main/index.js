import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Portfolio from '../../pages/Portfolio';

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
