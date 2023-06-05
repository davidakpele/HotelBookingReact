import React from 'react'
import '../../assets/styles/NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className='logo'>lamabooking</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
    
  )
}

export default NavBar