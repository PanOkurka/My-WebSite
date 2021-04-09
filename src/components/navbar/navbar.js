import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'

function NavBar() {
    
    const [ click , setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>    
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Domov
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/bio' className='nav-links' onClick={closeMobileMenu}>
                                Bio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                                Some Info
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>  
        </>
    )
}

export default NavBar
