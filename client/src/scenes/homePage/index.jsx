import ImageSlider from "../../component/ImageSlider/imageSlider";
import { SliderData } from "../../component/ImageSlider/sliderData";
// import FightVideo from "../../assets/VideoPlayerVideos/FightScenes.mp4";
// import TeamVideo from "../../assets/TeamVideo/Team.mp4";

import "./index.css";

import InfoCard from "../../component/InfoCard/InfoCard";
import SimpleMap from "../../component/VisitUs/VisitUs";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <div className="image-section">
        <ImageSlider slides={SliderData} />
      </div>
      {/* <div className="video-section">
        <button className="button">BOOK A CLASS</button>
        <video className="video" src={FightVideo} autoPlay muted loop />
      </div> */}
      <div>
        <h1>MARTIAL ARTS PROGRAMS</h1>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      {/* <div>
        <div className="video-section">
          <video className="video" src={TeamVideo} autoPlay muted loop />
        </div>
      </div> */}
      <div>
        <h1>Visit Us</h1>
        <SimpleMap />
      </div>
    </>
  );
};

export default HomePage;
