import React, { useState } from 'react';
import right from '../assets/rightArrow.png'
import left from '../assets/leftArrow.png'


function Page5() {
    const images = [
        {
          src: 'src/assets/t-image1.png',
          text: 'Jack LaLanne, known as the "Godfather of Fitness," advocated for exercise and healthy eating long before it became popular.',
          author: 'Jack LaLanne',
        },
        {
          src: 'src/assets/t-image2.jpg',
          text: 'Jillian Michaels is a renowned personal trainer and TV personality known for her no-nonsense approach to fitness and weight loss.',
          author: 'Jillian Michaels',
        },
        {
          src: 'src/assets/t-image3.jpg',
          text: 'Mark Sisson is the founder of the Primal Blueprint and emphasizes the importance of a primal lifestyle for optimal health and fitness.',
          author: 'Mark Sisson',
        },
       
      ];
      
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
  return (
    <>
      <div className="flex  w-full flex-col md:flex-row font-serif mb-10">
  <div className="card bg-base-300 rounded-box p-12 m-4  flex-grow place-items-center md:w-[50%]">
    <h1 className='text-red-700 font-bold text-2xl uppercase m-4'>Testimonials</h1>
    <h1 className=' font-bold text-2xl uppercase m-4'>What they</h1>
    <h1 className='text-2xl text-white font-bold uppercase m-4'>say about us</h1>
    <p className="mt-4  text-pink-800 font-serif font-bold text-xl">{images[currentIndex].text}</p>
    <p className="mt-4 text-center text-black font-serif font-bold text-xl">{images[currentIndex].author}</p>
  </div>
  
  <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">
  <div className="flex flex-col items-center">
      <img src={images[currentIndex].src} alt="carousel" className="w-full h-96 rounded-xl" />

      <div className="mt-4">
        <button onClick={prevSlide} className=" p-2">
        <img src={left} alt="" className='h-8' />
        </button>
        <button onClick={nextSlide} className="p-2 ">
        <img src={right} alt="" className='h-8' />
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Page5
