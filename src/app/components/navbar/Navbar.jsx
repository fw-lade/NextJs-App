import Link from 'next/link'
import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <h1>LOGO</h1>
        <div className="links">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/services">SERVICES</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar