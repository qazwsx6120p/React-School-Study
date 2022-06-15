import { useState } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import Product from './pages/Product'
import Product3C from './pages/ProductCats/Product3C'
import ProductMobile from './pages/ProductCats/ProductMobile'
import User from './pages/User'

function App() {
  // auth=false 代表會員未登入
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <h2>選單</h2>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/about">關於我們</Link>
      <br />
      <Link to="/login">會員登入</Link>
      <br />
      <Link to="/product">產品</Link>
      <br />
      <Link to="/product/mobile">產品/手機</Link>
      <br />
      <Link to="/product/3c">產品/3c</Link>
      <hr />
      <Switch>
        <Route path="/login">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route path="/product/mobile">
          <ProductMobile />
        </Route>
        <Route path="/product/3c">
          <Product3C />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About auth={auth} />
        </Route>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
