import React from "react";
import Header from "../../components/landing/Header";
import FooterLanding from "../../components/landing/FooterLanding";
import "../../styles/About.css";
import HeroAbout from "../../components/about/HeroAbout";
import MissionVision from "../../components/about/MissionVision";
import Values from "../../components/about/Values";
import MediaShowcase from "../../components/about/MediaShowcase";
import Team from "../../components/about/Team";
import Timeline from "../../components/about/Timeline";
import FAQ from "../../components/about/FAQ";
import AboutCTA from "../../components/about/AboutCTA";
import CommunitiesShowcase from "../../components/about/CommunitiesShowcase";

interface AboutPageProps {
    toggleTheme: () => void;
    currentMode: "light" | "dark";
}

const AboutPage: React.FC<AboutPageProps> = ({ toggleTheme, currentMode }) => {
    return (
        <main>
            <Header toggleTheme={toggleTheme} currentMode={currentMode} />
            <HeroAbout />
            <MissionVision />
            <Values />
            <MediaShowcase />
            <Team />
            <Timeline />
            <CommunitiesShowcase />
            <FAQ />
            <AboutCTA />
            <FooterLanding />
        </main>
    );
};

export default AboutPage;





