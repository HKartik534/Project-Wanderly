
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/Pages/Pages/About'
import Booking from './Component/Pages/Pages/Booking'
import Contact from './Component/Pages/Pages/Contact'
import Destination from './Component/Pages/Pages/Destination'
import Home from './Component/Pages/Pages/Home'
import Package from './Component/Pages/Pages/Package'
import Services from './Component/Pages/Pages/Services'
import Team from './Component/Pages/Pages/Team'
import Testimonial from './Component/Pages/Pages/Testimonial'
import Header from './Component/Pages/Layout/Header'
import Footer from './Component/Pages/Layout/Footer'
import Layout from './Component/Pages/Layout/Layout'
import Error from './Component/Pages/Pages/Error'
import Register from './Component/Pages/auth/Register'
import Sign_up from './Component/Pages/auth/Sign_up'
import { ToastContainer } from 'react-toastify'


function App() {
 

  return (
    <>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                <Route path="about" element={<About></About>}/>
                <Route path="booking" element={<Booking></Booking>}/>
                <Route path="contact" element={<Contact></Contact>}/>
                <Route path="destination" element={<Destination></Destination>}/>
                <Route path="home" element={<Home></Home>}/>
                <Route path="package" element={<Package></Package>}/>
                <Route path="services" element={<Services></Services>}/>
                <Route path="team" element={<Team></Team>}/>
                <Route path="testimonial" element={<Testimonial></Testimonial>}/>
               <Route path="/register" element={<Register></Register>}/>
              <Route path="/signup" element={<Sign_up></Sign_up>}/>
                
            </Route>
              <Route path="/*" element={<Error></Error>}/>
            </Routes>
         </BrowserRouter> 
         <ToastContainer/>
         
    </>
  )
}

export default App
