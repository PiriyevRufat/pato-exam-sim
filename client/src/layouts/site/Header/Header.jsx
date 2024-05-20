import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <nav>
    <div className="container">
    <header className='home-header'>
    <div className='nav-left'><Link href=""><img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" /></Link></div>
    <div className="nav-middle">
    <ul className='pages-ul'>
    <li>
        <Link>Home</Link>
    </li>
    <li>
        <Link>Menu</Link>
    </li>
    <li>
        <Link>Reservation</Link>
    </li>
    <li>
        <Link>Gallery</Link>
    </li>
    <li>
        <Link to='/admin'>Admin</Link>
    </li>
    <li>
        <Link to='/basket'>Basket</Link>
    </li>
    <li>
        <Link>Contact</Link>
    </li>
    </ul>
    </div>
    <div className="nav-right">
    <ul className='icons-ul'>
    <li><a href=""><i class="fa-solid fa-hippo"></i></a></li>
    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
    </ul>
    </div>
    </header>
    </div>
    </nav>
  )
}

export default Header
