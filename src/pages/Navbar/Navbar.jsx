import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar' id='start'>
      <div className="nav_logo">
        <h3>Logo Here</h3>
      </div>
      <div className="Nav_links">
        <Link className='Link' to=''>Home</Link>
        <Link className='Link' to='about'>About</Link>
        <Link className='Link' to='portfolio'>PORTFOLIO</Link>
        <Link className='Link' to='product'>PRODUCT</Link>
        <Link className='Link' to='expertise'>EXPERTISE</Link>
        <Link className='Link' to='contact'>CONTACT</Link>
        <Link className='Link' to='blog'>BLOG</Link>
      </div>
    </div>
  )
}

export default Navbar