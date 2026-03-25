import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
