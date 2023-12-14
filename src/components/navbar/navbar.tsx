import React from 'react'
import "./navbar.scss"
import user from './../../../public/user.png'
function Navbar() {
  return (
    <ul className='nav-bar'>
      <li className='item'>item1</li>
      <li className='item'>item2</li>
      <li className='item'>item3</li>
      <li><img src={user} height={40} width={40} alt="user" /></li>

    </ul>
  )
}

export default Navbar