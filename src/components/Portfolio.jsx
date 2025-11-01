import ContactSection from "./Contact/ContactSection";
import ExperienceSection from "./Experience/ExperienceSection";
import Footer from "./Footer";
import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar";
import ProjectsSection from "./Projects/ProjectsSection";
import SkillsSection from "./Skills/SkillsSection";
import '../css/portfolio.css'
import AboutMe from "./about/About";
import CertificationsSections from "./certifications/CertificationSections";

const Portfolio = () => {
    
    return (
        <>
            <Navbar />
            <main>
                <HeroSection/>
                <AboutMe />
                <ProjectsSection/>
                <ExperienceSection/>
                <SkillsSection/>
                <CertificationsSections/>
                <ContactSection/>
            </main>
            <Footer />
        </>
    );

};

export default Portfolio;