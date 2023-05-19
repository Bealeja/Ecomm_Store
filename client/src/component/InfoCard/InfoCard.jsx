import CompetitionCard from "../../assets/CardPhotos/CompetitionFight.png";

import "./InfoCard.css";

const InfoCard = () => {
  return (
    <span className="card-section">
      <img src={CompetitionCard} className="card-image" alt="Competition" />
      <h2>Strength Training</h2>
      <p>
        Strength class is a high-intensity training session designed to develop
        muscular strength, power, and endurance. The class typically involves a
        combination of weightlifting, bodyweight exercises, and conditioning
        drills, such as squats, deadlifts, bench press, pull-ups, and sprints.
      </p>
    </span>
  );
};

export default InfoCard;
