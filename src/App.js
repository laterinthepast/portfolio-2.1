import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingMain from './pages/Landing';
import WorkSection from './pages/Work';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingMain />
        </Route>
        <Route path="/work">
          <WorkSection />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
