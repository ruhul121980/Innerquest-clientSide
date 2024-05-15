import { Outlet } from "react-router-dom";
import Navbar from "./HomePage/NavBar/Navbar";
import Footer from './HomePage/Footer/Footer';


export default function Root() {
  return (
    <div>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        <Footer></Footer>
      
    </div>
  )
}
