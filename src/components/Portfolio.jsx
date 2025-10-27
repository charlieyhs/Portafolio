import ContactSection from "./Contact/ContactSection";
import ExperienceSection from "./Experience/ExperienceSection";
import Footer from "./Footer";
import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar";
import ProjectsSection from "./Projects/ProjectsSection";
import SkillsSection from "./Skills/SkillsSection";
import '../css/portfolio.css'

const Portfolio = () => {
    
    return (
        <>
            <Navbar />
            <main>
                <HeroSection/>
                <ProjectsSection/>
                <ExperienceSection/>
                <SkillsSection/>
                <section id="contact"><ContactSection/></section>
            </main>
            <Footer />
        </>
    );

};

export default Portfolio;