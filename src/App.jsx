
import './App.css'
import Appointment from './components/Appointment/Appointment'
import Banner from './components/Banner/Banner'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Statistics from './components/Statistics/Statistics'
import Testimonial from './components/Testimonial/Testimonial'
import WeAre from './components/WeAre/WeAre'

function App() {


  return (
    <div>
      <div className='mx-2 xl:mx-32'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Statistics></Statistics>
        <WeAre></WeAre>
        <Service></Service>
        <Testimonial></Testimonial>
        <Faq></Faq>
        <Appointment></Appointment>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
