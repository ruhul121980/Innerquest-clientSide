import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import PopularServices from "../PopularServices/PopularServices";

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
