import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import OurVision from "../components/OurVision";

const Home = () => {
    return (

        <div className="home">
            <HeroSection />

            <AboutUsSection />
            <OurMission />
            <OurVision />

            <OurTeam />
            <Footer/>
        </div>
    );
}

export default Home