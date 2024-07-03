// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Appointment from './components/Appointment/Appointment'
import Banner from './components/Banner/Banner'
import Faq from './components/Faq/Faq'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import WeAre from './components/WeAre/WeAre'

function App() {


  return (
    <div className='mx-2 xl:mx-32'>
      <Navbar></Navbar>
      <Banner></Banner>
      <WeAre></WeAre>
      <Service></Service>
      <Faq></Faq>
      <Appointment></Appointment>
    </div>
  )
}

export default App
