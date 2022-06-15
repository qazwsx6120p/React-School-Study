import React from 'react'

function Login(props) {
  const { auth, setAuth } = props

  return (
    <>
      <h1>會員登入</h1>
      <p>{auth ? '會員已登入' : '未登入'}</p>
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
    </>
  )
}

export default Login
