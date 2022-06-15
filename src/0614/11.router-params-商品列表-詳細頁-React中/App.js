import { useState } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Detail from './pages/ProductInReact/Detail'
import List from './pages/ProductInReact/List'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'

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
      <Link to="/product-list">商品列表</Link>
      <hr />
      <Switch>
        <Route path="/product-list">
          <List />
        </Route>
        <Route path="/product-detail/:productId">
          <Detail />
        </Route>
        <Route path="/login">
          <Login auth={auth} setAuth={setAuth} />
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
