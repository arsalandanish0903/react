import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Arsalan
                </Link>    
                <div className="menu-icons" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>  
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='works' className='nav-links' onClick={closeMobileMenu}>
                            Works
                        </Link>    
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>    
                    </li>    
                </ul>          
            </div>
        </nav>
    </>
  )
}

export default Navbar
