import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactPage from "./scenes/contactPage/index";
import HomePage from "./scenes/homePage/index";
import MartialArtPage from "./scenes/martialartsPage/index";
import MembershipPage from "./scenes/membershipPage/index";
import NavBar from "./component/navBar/navBar";
import TeamPage from "./scenes/teamPage/index";
import TimetablePage from "./scenes/timetablePage/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route index path="martialarts" element={<MartialArtPage />} />
            <Route index path="timetable" element={<TimetablePage />} />
            <Route index path="membership" element={<MembershipPage />} />
            <Route index path="team" element={<TeamPage />} />
            <Route index path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
