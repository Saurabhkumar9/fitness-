import React from 'react'
import Left from './Left'
import Right from './Right'
import Hero from './Hero'

function Header() {
  return (
    <>
      <div className='flex flex-col w-full bg-gray-700 md:flex-row text-white'>
        <div className='w-full p-4 md:w-[72%]'>
             <Left/>
        </div>
        <div className='w-full p-4  bg-yellow-700  md:w-[28%]'>
        <Right/>
        </div>
      </div>
      <Hero/>
    </>
  )
}

export default Header
