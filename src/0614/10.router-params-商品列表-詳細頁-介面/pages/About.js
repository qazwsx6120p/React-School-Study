import React from 'react'

function About(props) {
  const { auth } = props
  return (
    <>
      <h1>關於我們 About</h1>
      <p>{auth ? '會員已登入' : '未登入'}</p>
    </>
  )
}

export default About
