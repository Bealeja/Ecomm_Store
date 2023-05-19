import "./martialartspage.css";
import MartialArts from "../../component/martialArts/martialArts";
import Adults from "../../assets/MartialArtsPhotos/BJJ.png";
import Kids from "../../assets/MartialArtsPhotos/Kids.png";
import Fitness from "../../assets/MartialArtsPhotos/Fitness.png";

const MartialArtPage = () => {
  return (
    <>
      <div className="container">
        <h1>Martial Arts Programs</h1>
        <div className="section">
          <MartialArts photo={Adults} />
          <h2>Adults</h2>
          <MartialArts photo={Kids} />
          <h2>Childrens</h2>
          <MartialArts photo={Fitness} />
          <h2>Fitness</h2>
        </div>
      </div>
    </>
  );
};

export default MartialArtPage;
