import React from 'react'

function Navbar() {
  return (
      <>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        <li className='font-mono'><link to ="/"></link>Home</li>
        <li className='font-mono'><link to ="/about"></link>About</li>
        <li className='font-mono'><link to ="/projects"></link>Projects</li>
        <li className='font-mono'><link to ="/contact"></link>Contact</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">S.R.</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-mono'><link to ="/"></link>Home</li>
      <li className='font-mono'><link to ="/about"></link>About</li>
      <li className='font-mono'><link to ="/projects"></link>Project</li>
      <li className='font-mono'><link to ="/contact"></link>Contact</li>
    </ul>
  </div>
</div>
      </>
  )
}

export default Navbar
