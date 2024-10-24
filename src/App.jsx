import './App.css'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'
import Footer from './components/Footer/Footer'
import KeyVerticals from './components/KeyVerticals/KeyVerticals'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import Navbar from './components/Navbar/Navbar'
import Asia from './components/ScrollHorizontal/Asia'
import ScrollHorizontal from './components/ScrollHorizontal/ScrollHorizontal'
import Videopage from './components/VideoPage/Videopage'
// import LocomotiveScroll from 'locomotive-scroll';


function App() {

  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Videopage/>
      <LandingPage/>
      {/* <Marquee/> */}
      <About/>
      <KeyVerticals/>
      {/* <Eyes/>     
      <Asia/>
      <ScrollHorizontal/>
      <Footer/> */}
    </div>
  )
}

export default App
