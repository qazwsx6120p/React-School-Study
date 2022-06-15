import React from 'react'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const { auth, setAuth } = props

  const history = useHistory()

  return (
    <>
      <h1>會員登入 Login</h1>
      <p>{auth ? '會員已登入' : '未登入'}</p>
      <button
        onClick={() => {
          // 先計算出要設定的新狀態
          const newAuth = !auth

          // 設定給react狀態，注意！異步執行
          setAuth(newAuth)

          // 呈現歡迎或登出訊息
          const msg = newAuth ? '歡迎! xxx' : '期待下次光臨'
          alert(msg)

          // 導向 關於我們 頁面
          history.push('/about')
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        返回上一頁
      </button>
    </>
  )
}

export default Login
