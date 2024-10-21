import React from 'react'
import Home from './Home'

function Left() {
  return (
    <>
     <nav className="navbar bg-base-100 md:flex">
  <div className="flex-1">
    <a href="#" className="btn btn-ghost text-xl">the fitnes</a>
  </div>
  <div className="flex-none">
  <ul className="menu menu-horizontal px-1 flex justify-between md:gap-x-6 ">
    <li className='hover:text-black'><a href="#">Home</a></li>
    <li className='hover:text-black'><a href="#">Program</a></li>
    <li className='hover:text-black'><a href="#">Plan</a></li>
  </ul>
</div>

</nav>

<Home/>

    </>
  )
}

export default Left
