import ContactSection from "./Contact/ContactSection";
import ExperienceSection from "./Experience/ExperienceSection";
import Footer from "./Footer";
import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar";
import ProjectsSection from "./Projects/ProjectsSection";
import SkillsSection from "./Skills/SkillsSection";

const Portfolio = () => {
    
    return (
        <>
            <Navbar />
            <main>
                <HeroSection/>
                <section id="projects"><ProjectsSection/> </section>
                <section id="experience"><ExperienceSection/></section>
                <section id="skills"><SkillsSection/></section>
                <section id="contact"><ContactSection/></section>
            </main>
            <Footer />
        </>
    );

};

export default Portfolio;