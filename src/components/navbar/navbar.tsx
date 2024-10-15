import "./navbar.scss"
import user from './../../../public/user.png'
function Navbar() {
  return (
    <ul className='nav-bar'>
      <li className='item'>Fighting</li>
      <li className='item'>Adventure</li>
      <li className='item'>Action</li>
      <li><img src={user} height={40} width={40} alt="user" /></li>

    </ul>
  )
}

export default Navbar