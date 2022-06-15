import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import User from './pages/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
