import { Link } from 'react-router-dom';
const OurTeam = () => {

    const teamDetails = [
        {
            image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
            name: "John Doe",
            role: "Club head"
        },
        {
            image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
            name: "John Doe",
            role: "Club head"
        },
        {
            image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
            name: "John Doe",
            role: "Club head"
        },
    ]
    return (
        <div className="section">
        <div className="our-team">

            <Link to="/our-team">

                <h1>Our Team</h1>

                {/* cards */}
              
                <div className="team-members-cards">
                    {teamDetails.map((teamDetail) => (
                        <div className="team-member-card">
                            <div className="card-image"><img src={teamDetail.image} alt="" height="100%" /></div>
                            <div className="card-details">
                                <h2 className="card-name">{teamDetail.name}</h2>
                                <p className="card-role">
                                    {teamDetail.role}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>

            </Link>
        </div>
        </div>
    );
}

export default OurTeam;