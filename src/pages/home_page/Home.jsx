import React from 'react'
import './Home.scss'


import HeroSection from '../../components/home/hero__section/HeroSection'
import AboutSection from '../../components/home/about__section/AboutSection'
import ProductSection from '../../components/home/product__section/ProductSection'
import FooterCard from '../../components/home/footer/FooterCard'


const Home = () => {



  return (
    <div className='container'>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FooterCard />
    </div>
  )
}

export default Home