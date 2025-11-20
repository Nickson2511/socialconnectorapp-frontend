import React from "react";
import Header from "../../components/landing/Header";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import BrandsMarquee from "../../components/landing/BrandsMarquee";
import Testimonials from "../../components/landing/Testimonials";
import CTA from "../../components/landing/CTA";
import FooterLanding from "../../components/landing/FooterLanding";
import "../../styles/Landing.css";
import ConnectsMeDeepSection from "../../components/landing/ConnectsMeDeepSection";
import ConnectsMeEngageSection from "../../components/landing/ConnectsMeEngageSection";


interface LandingPageProps {
    toggleTheme: () => void;
    currentMode: "light" | "dark";
}

const LandingPage: React.FC<LandingPageProps> = ({ toggleTheme, currentMode }) => {
    return (
        <main>
            <Header toggleTheme={toggleTheme} currentMode={currentMode} />
            <Hero />
            <Features />
            <BrandsMarquee />
            <Testimonials />
            <ConnectsMeDeepSection />
            <CTA />
            <ConnectsMeEngageSection />
            <FooterLanding />
        </main>
    );
};

export default LandingPage;
