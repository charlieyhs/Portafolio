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
import { useTranslation } from "react-i18next";
import { scrollBehavior } from "../utils/scroll";
import { useEffect, useState } from "react";
import Icon from "./Icon";

const Portfolio = () => {
    const {t} = useTranslation();

    useEffect(()=> {
        const handleScroll = () => {
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
        window.scrollTo({top: 0, behavior: scrollBehavior()});
    };

    return (
        <>
            <Navbar />
            <button 
                className={`back-to-top ${visible ? "visible" : ""}`}
                id="backToTop"
                aria-label={t('navbar.back-to-top')}
                onClick={() => btnTop()}>
                <Icon name="arrow-up" size={20} />
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