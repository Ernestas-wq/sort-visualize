import React from 'react';
import Navbar from './Navbar';
import Sort from './Sort';
import Error from './Error';
import About from './About';
import Footer from './Footer';
import Algorythms from './Algorythms';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Sort />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/algorythms">
            <Algorythms />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
