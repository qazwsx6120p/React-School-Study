import React from 'react'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const { auth, setAuth } = props

  const history = useHistory()

  return (
    <>
      <h1>會員登入</h1>
      <p>{auth ? '會員已登入' : '未登入'}</p>
      <button
        onClick={() => {
          const newAuth = !auth

          setAuth(newAuth)
          // 呈現歡迎或登出訊息
          const msg = newAuth ? '歡迎xxx' : '期待下次光臨'
          alert(msg)

          // 導向 關於我們 頁面
          history.push('/about')
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
    </>
  )
}

export default Login
