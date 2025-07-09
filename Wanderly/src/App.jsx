
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About'
import Booking from './Component/Booking'
import Contact from './Component/Contact'
import Destination from './Component/Destination'
import Home from './Component/Home'
import Package from './Component/Package'
import Services from './Component/Services'
import Team from './Component/Team'
import Testimonial from './Component/Testimonial'

function App() {
 

  return (
    <>
          <BrowserRouter>
          
              <Routes>
                    <Route path="/about" element={<About/>}>

                    </Route>

                    <Route path="/booking" element={<Booking></Booking>}>

                    </Route>

              </Routes>
          
          </BrowserRouter>

    </>
  )
}

export default App
