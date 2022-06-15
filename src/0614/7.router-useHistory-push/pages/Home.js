import React from 'react'

function Home(props) {
  const { auth } = props
  return (
    <>
      <h1>Home</h1>
      <p>{auth ? '會員已登入' : '未登入'}</p>
    </>
  )
}

export default Home
