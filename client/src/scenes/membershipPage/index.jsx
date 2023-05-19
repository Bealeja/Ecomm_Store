import "./membershippage.css";

const MembershipPage = () => {
  return (
    <div>
      <h1>Membership Page</h1>
      <h2>First Timer Classes $20</h2>
      <table>
        <thead>
          <tr>
            <th>Payment Option</th>
          </tr>
        </thead>
        <tbody>
          {/* {paymentOptions.map((option) => (
            <tr key={option}>
              <td>{option}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <h2>Junior Prices (Ages 4-13)</h2>
      <table>
        <thead>
          <tr>
            <th>Payment Option</th>
          </tr>
        </thead>
        <tbody>
          {/* {paymentOptions.map(option => (
            <tr key={option}>
              <td>{option}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default MembershipPage;
