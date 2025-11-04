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
import { useEffect, useState } from "react";

const Portfolio = () => {

    useEffect(()=> {
        const handleScroll = () => {
            console.log(window.scrollY);
            if(window.scrollY > 100){
                setVisible(true);
            }else{
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [visible, setVisible] = useState(false);

    const btnTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            <Navbar />
            <button 
                className={`back-to-top ${visible ? "visible" : ""}`}
                id="backToTop"
                onClick={() => btnTop()}>
                ↑ 
            </button>
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