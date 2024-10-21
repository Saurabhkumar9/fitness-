import Footer from './Footer'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-600 to-gray-800 h-auto w-full font-serif">
        <Page1/>
        <Page2/>
        <Page3/>
      <Page4/>
        <Page5/>
        <Footer/>
      </div>
    </>
  )
}

export default Hero;
