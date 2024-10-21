import React from 'react'

function Footer() {
  return (
    <>
 <div className="flex  w-full flex-col md:flex-row font-serif mb-10">
  <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
    <p className='text-3xl font-bold text-white'>Ready toLevel up <br /><span className='text-black'>your body with us?</span></p>
  </div>
  
  <div className="card bg-base-300 rounded-box flex-grow bg-gray-700 text-center p-6 rounded m-10">
  <div className='flex flex-col md:flex-row  items-center justify-between '>
    <p className='mb-4 text-white'>Enter your Email Address here</p> {/* Added text color for contrast */}
    <button className='p-4 bg-yellow-500 rounded font-bold text-black hover:bg-yellow-600 transition duration-300'>Join now</button>
  </div>
</div>


</div>
<hr />

<div className='flex justify-center items-center text-center gap-4 h-32'>
  <i className="fa-brands fa-twitter"></i>
  <i className="fa-brands fa-instagram"></i>
  <i className="fa-brands fa-facebook"></i>
</div>

    </>
  )
}

export default Footer
