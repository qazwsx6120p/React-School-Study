import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import Product from './pages/Product/Product'
import User from './pages/User'

function App() {
  return (
    <Router>
      <h2>使用a連結</h2>
      <a href="/">首頁</a>
      <br />
      <a href="/about">關於我們</a>
      <br />
      <a href="/login">會員登入</a>
      <hr />
      <h2>使用Link元件</h2>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/about">關於我們</Link>
      <br />
      <Link to="/login">會員登入</Link>
      <hr />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/about/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
