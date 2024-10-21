import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import adidas from '../assets/adidas.png'
import nike from '../assets/nike.png'
import nb from '../assets/nb.png'

function Page2() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
  <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">
    <div className="flex">
 
    <div className="w-1/2 flex justify-center items-center">
    <img src={image1} alt="Left Image" className="w-1/2 h-auto" />
  </div>
  <div className="w-full flex flex-col">
 
    <div className="flex-1 flex justify-center items-center">
      <img src={image2} alt="Top Right Image" className=" h-auto" />
    </div>
    
    
    <div className="flex-1 flex">
      <div className="w-full flex justify-center items-center">
        <img src={image3} alt="Bottom Left Image" className=" h-auto" />
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={image4} alt="Bottom Right Image" className="w-3/4 h-auto" />
      </div>
    </div>
  </div>
</div>

  </div>
  <div className="divider divider-horizontal">
  <div className="p-6">
  <h2 className="text-5xl font-bold mb-4 uppercase"><span className='text-pink-500'>Why</span> choose us?</h2>
  <ul className="space-y-2">
    <li className="text-lg">
      <strong>Over 140+ expert coaches</strong> 
    </li>
    <li className="text-lg">
      <strong>Train smarter and faster than before.</strong> 
    </li>
    <li className="text-lg">
      <strong>1 free program for new members</strong>
    </li>
    <li className="text-lg">
      <strong>Reliable partners</strong> 
    </li>
  </ul>

  <h3 className="text-xl font-bold mt-8 mb-4">OUR PARTNERS</h3>
  <div className="flex flex-wrap gap-4">
  
    <div className=" p-4 rounded-lg w-40 text-center">
      <img src={adidas} alt="" />
    </div>
    <div className=" p-4 rounded-lg w-40 text-center">
      <img src={nb} alt="" />
    </div>
    <div className=" p-4 rounded-lg w-40 text-center">
      <img src={nike} alt="" />
    </div>

  </div>
</div>

  </div>
  
</div>
    </>
  )
}

export default Page2
