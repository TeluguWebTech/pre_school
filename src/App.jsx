
import React from 'react'
import Topbar from './components/Topbar'
import Slider from './components/Slider'

import "./App.css"
import Banner from './components/Banner'
import AnimatedIcons from './components/StrapBand'
import LevelsOfLearning from './components/Gallery'
import Programs from './components/Tiles'
import Features from './components/Features'
import PhotoGallary from './components/PhotoGallary'
import Testimonials from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Topbar />
      <Slider />
      <Banner />
      <AnimatedIcons />
      <LevelsOfLearning />
      <Features />
      <Programs />
      <PhotoGallary />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App