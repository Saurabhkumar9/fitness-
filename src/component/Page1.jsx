import React from 'react'
import fat from '../assets/Fat Burning.jpg'
import cardio from '../assets/Cardio Training.jpg'
import Strength  from '../assets/strength.jpg'
import health  from '../assets/Health Fitness.jpg'

function Page1() {
  return (
    <>
       <div className='flex flex-col md:flex-row justify-between p-10'>
            <h1 className='text-2xl font-bold text-red-700 uppercase'>Explore our</h1>
            <h1 className='text-2xl font-bold text-pink-500 uppercase'>Programs</h1>
            <h1 className='text-2xl font-bold text-white uppercase'>To shape you</h1>
            
        </div>
        <div className='p-5  md:flex gap-2'>
        <div className="card card-compact bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={Strength }
      alt="" className='w-full overflow-hidden' />
  </figure>
  <div className="card-body m-2 hover:bg-red-500 h-32 md:h-auto">
    <h2 className="card-title  bg-pink-300 rounded w-[50%] text-center ">Strength Training</h2>
    <p>In this program, you are trained to improve your strength through many exercises.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary  bg-black text-white rounded text-xl p-1 font-bold m-2">Join Now</button>
    </div>
  </div>
</div>

<div className="card card-compact bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={cardio}
      alt="" />
  </figure>
  <div className="card-body m-2 hover:bg-red-500 h-32 md:h-auto">
    <h2 className="card-title  bg-pink-300 rounded w-[50%] text-center">Cardio Training</h2>
    <p>In this program, you are trained to improve your strength through many exercises.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-black text-white rounded text-xl p-1 font-bold m-2">Join Now</button>
    </div>
  </div>
</div>


<div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={fat}
      alt="" />
  </figure>
  <div className="card-body m-2 hover:bg-red-500 h-32 md:h-auto">
    <h2 className="card-title bg-pink-300 rounded w-[50%] text-center">Fat Burning</h2>
    <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary  bg-black text-white rounded text-xl p-1 font-bold m-2">Join Now</button>
    </div>
  </div>
</div>


<div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={health}
      alt="" />
  </figure>
  <div className="card-body m-2 hover:bg-red-500 h-32 md:h-auto">
    <h2 className="card-title  bg-pink-300 rounded w-[50%] text-center">Health Fitness</h2>
    <p className=''>This programs is designed for those who exercises only for their body fitness not body building.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary  bg-black text-white rounded text-xl p-1 font-bold m-2 ">Join Now</button>
    </div>
  </div>
</div>




        </div>
        
    </>
  )
}

export default Page1
