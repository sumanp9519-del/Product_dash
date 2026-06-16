import { Route, Routes} from "react-router"
import './App.css'
import Home from './Home'
import Product from './Product'
import Productdetails from './Productdetails'
import Navbar from "./Navbar"


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/productdetails/:name" element={<Productdetails />} />
    </Routes>
      
    </>
  )

}

export default App
