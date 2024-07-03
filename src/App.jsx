// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import WeAre from './components/WeAre/WeAre'

function App() {
  

  return (
    <div className='mx-2 xl:mx-32'>
      <Navbar></Navbar>
      <Banner></Banner>
      <WeAre></WeAre>
    </div>
  )
}

export default App
