import "./timetable.css";

const TimeTablePage = () => {
  return (
    <div className="container">
      <h1>Martial Arts Gym Timetable</h1>
      <table className="timetable">
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brazilian Jiu-Jitsu (BJJ)</td>
            <td>6:00 PM - 7:30 PM</td>
            <td></td>
            <td>6:00 PM - 7:30 PM</td>
            <td></td>
            <td></td>
            <td>10:00 AM - 12:00 PM</td>
            <td></td>
          </tr>
          <tr>
            <td>Muay Thai</td>
            <td></td>
            <td>7:00 PM - 8:30 PM</td>
            <td></td>
            <td>7:00 PM - 8:30 PM</td>
            <td></td>
            <td>2:00 PM - 4:00 PM</td>
            <td></td>
          </tr>
          <tr>
            <td>Fitness</td>
            <td>8:00 AM - 9:00 AM</td>
            <td></td>
            <td>8:00 AM - 9:00 AM</td>
            <td></td>
            <td>8:00 AM - 9:00 AM</td>
            <td>8:00 AM - 9:00 AM</td>
            <td></td>
          </tr>
          <tr>
            <td>Boxing</td>
            <td>5:30 PM - 7:00 PM</td>
            <td></td>
            <td>5:30 PM - 7:00 PM</td>
            <td></td>
            <td>6:00 PM - 7:30 PM</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeTablePage;
