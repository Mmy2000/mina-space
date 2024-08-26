import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Info from './components/Info'
import Brands from './components/Brands'
import Products from './components/Products'
import Main from './components/Main'
import Brands2 from './components/Brands2'
import We from './components/We'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Info/>
        <Brands/>
        <Products/>
        <Main/>
        <Brands2/>
        <We/>
        {/* Simple pricing forevermore */}
        <Pricing/>
        {/* Simple pricing forevermore */}
        <Reviews/>
        <Footer/>
      </div>
    </>
  );
}

export default App
