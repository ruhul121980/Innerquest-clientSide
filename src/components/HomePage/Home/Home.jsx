import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import PopularServices from "../PopularServices/PopularServices";
import User2 from "../../Services/All Services/User2";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl"></h2>
      <Slider></Slider>
      <div className="w-11/12 mx-auto">
      <PopularServices></PopularServices>
      </div>
      
      <Footer></Footer>
    </div>
  );
}
