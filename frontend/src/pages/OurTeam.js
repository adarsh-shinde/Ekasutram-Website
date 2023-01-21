import Footer from "../components/Footer";

const OurTeam = () => {

    const teamDetails = {
        clubHeads: [
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
            }
        ],
        contentandMangazineHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Content and Magazine head"
            }
        ],
        contentandResearchHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Content and Research head"
            }
        ],
        MultimediaandSocialMediaHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Multimedia & Social Media head"
            }
        ],
        MultimediaandPhotographyHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Mulitmedia & Photography head"
            }
        ],
        TechnicalHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Technical head"
            },
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Technical head"
            },
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Technical head"
            }

        ],
        FinanceandSponsorshipHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Finance & Sponsorship head"
            }
        ],
        ManagementHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Management head"
            }
        ],
        PublicityandOutreachHeads: [
            {
                image: "https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg",
                name: "John Doe",
                role: "Publicity & Outreach head"
            }
        ],

    }


    return (
        <div className="our-team-section">

            {/* club heads */}
            <section className="club-heads team">
                <h1> Club Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['clubHeads'].map((teamDetail) => (
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
            </section>

            {/* content & Magazine */}
            <section className="content-and-magazine-heads team">
                <h1> Content and Magazine Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['contentandMangazineHeads'].map((teamDetail) => (
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
            </section>

            {/* content & research */}
            <section className="content-and-research-heads team">
                <h1> Content and Research Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['contentandResearchHeads'].map((teamDetail) => (
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
            </section>


            <section className="Multimedia-and-Social-Media-heads team">
                <h1> Multimedia & Social Media  Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['MultimediaandSocialMediaHeads'].map((teamDetail) => (
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
            </section>

            {/* multimedia & photography */}
            <section className="Multimedia-and-Photography-heads team">
                <h1> Multimedia & Photography Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['MultimediaandPhotographyHeads'].map((teamDetail) => (
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
            </section>

            {/* technical */}
            <section className="Technical-heads team">
                <h1> Techincal Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['TechnicalHeads'].map((teamDetail) => (
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
            </section>

            {/* finance & Sponsorship */}
            <section className="Finance-and-Sponsorship-heads team">
                <h1> Finance & Sponsorship Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['FinanceandSponsorshipHeads'].map((teamDetail) => (
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
            </section>

            {/* Management */}
            <section className="Management-heads team">
                <h1>Management Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['ManagementHeads'].map((teamDetail) => (
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
            </section>

            {/* Publicity & Outreach */}
            <section className="Publicity-and-Outreach-heads team">
                <h1> Publicity & Outreach Heads</h1>
                <div className="team-members-cards">
                    {teamDetails['PublicityandOutreachHeads'].map((teamDetail) => (
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
            </section>

            

            <Footer/>






        </div>
        
        
    );
}

export default OurTeam;