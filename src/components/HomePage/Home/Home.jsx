import Slider from "../Slider/Slider";
import PopularServices from "../PopularServices/PopularServices";
import User2 from "../../Services/All Services/AllServices";
import Banner from "../AboutUs/Banner";
import CounselingImportance from "../CounselingImportance/CounselingImportance";
import Frequently from "../Frequently/Frequently";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Inner Quest | Home</title>
        
      </Helmet>
      <h2 className="text-2xl"></h2>
      <Slider></Slider>
      <div className="">
      <PopularServices></PopularServices>

      </div>
      <Banner></Banner>
      <CounselingImportance></CounselingImportance>
      <Frequently></Frequently>
      
      
    </div>
  );
}
