import React from 'react'

function Home() {
  return (
    <>
      <div className='mt-40'>
      <div className="rounded-full border flex items-center justify-center h-10 md:w-[60%] text-center hover:text-black hover:font-bold">
           THE BEST FITNESS CLUB IN THE TOWN
         </div> 
         <h1 className='mt-10  text-5xl uppercase font-bold md:ml-20'>
         <span className='text-pink-700 '>Shape </span> Your <br />
         Ideal body
         </h1>
         <p className='mt-4 hover:text-xl  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus incidunt voluptas commodi?</p>


      
         <div className="flex w-full flex-col lg:flex-row gap-1 mt-5">
  <div className="card bg-base-300 rounded-box grid h-24 w-16 flex-grow place-items-center ">
    <p className='text-pink-500 text-2xl'>+ 150</p>
    <p  className='uppercase font-bold text-black text-xl'>expert coaches</p>
  </div>
  <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center ">
    <p className='text-pink-500 text-2xl'> + 900</p>
    <p className='uppercase font-bold text-black text-xl'>Members joined</p>
  </div>
  <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center ">
    

  </div>
</div>
</div>
<button className='btn bg-yellow-400 p-2 rounded font-bold'>GET STARTED</button>

    </>
  )
}

export default Home
