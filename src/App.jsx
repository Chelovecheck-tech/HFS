  import { useEffect, useState } from 'react'
  import reactLogo from './assets/react.svg'
  import './App.css'
  import Header from './components/Header.jsx' 
  import wp1 from './images/wp1.jpg'
  import wp2 from './images/wp2.jpg'
  import Slider from './components/Slider.jsx'
  import HeroBanner from './components/HeroBanner.jsx' 
  import Footer from './components/Footer.jsx' 
  import Catalog from './components/catalog/Catalog.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
          {/* <img src={wp1} className="bg-img"/> */}
        <Slider/>
        <section id='hero-banner'>
        <HeroBanner/></section>
        <section id='catalog'>
        <Catalog/></section>
        <section id='footer'>
        
        


        <Footer/></section>
       
        
      </div>
      
    </>
  )
}

export default App
