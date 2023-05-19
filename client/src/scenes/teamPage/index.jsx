import "./teampage.css";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      photo: "john.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      photo: "jane.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more team members here...
  ];

  return (
    <div>
      <h1>The Team</h1>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.name}>
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
