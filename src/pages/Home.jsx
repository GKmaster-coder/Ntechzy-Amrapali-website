import React from 'react'
import HeroSection from '../components/home/Herosection'
import About from '../components/home/About'
import ServiceSection from '../components/home/ServiceSection'
import Footer from '../components/home/Footer'
import Recognition from '../components/home/Recognition'
import CollegeTour from '../components/home/CollegeTour'
import Course from "../components/home/Course"
import CampusLife from '../components/home/CampusLife'
import EventSection from '../components/home/EventSection'
const Home = () => {
  return (
    <>
  <HeroSection/>
  <About/>
  <Course/>
  <ServiceSection/>
  <CollegeTour/>
  <EventSection/>
  <Recognition/>
  <CampusLife/>
  <Footer/>
    </>
  )
}
export default Home
