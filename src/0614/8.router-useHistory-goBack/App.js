import { useState } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import Product from './pages/Product/Product'
import User from './pages/User'

function App() {
  // auth=false 代表會員未登入
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <h2>使用Link元件</h2>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/about">關於我們</Link>
      <br />
      <Link to="/login">會員登入</Link>
      <hr />
      <Switch>
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
