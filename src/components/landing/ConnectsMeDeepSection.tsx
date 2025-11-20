import React from "react";
import { Button } from "@mui/material";

const deepCards = [
    {
        title: "A Smarter Way to Build Your Network",
        text: "connectsMe helps you access verified professionals, industry experts, mentors, students, and creators across all fields. Whether you're launching your career or expanding your reach, our platform unlocks meaningful connections.",
        img: "/assets/brands/hero-1.webp",
        cta: "Start Networking"
    },
    {
        title: "Grow Your Career With Real Opportunities",
        text: "Find jobs, freelance gigs, internships, and collaborations all in one place. connectsMe connects you with companies, startups, NGOs, and professionals who value your skills.",
        img: "/assets/brands/medical1.jpg",
        cta: "Explore Jobs"
    },
    {
        title: "Built for Students, Graduates & Young Professionals",
        text: "Students can discover mentorship, alumni support, career paths, scholarships, and internships while connecting with people already doing what they dream of doing.",
        img: "/assets/brands/nurse1.jpeg",
        cta: "Join as a Student"
    },
    {
        title: "A Place Where Creators & Entrepreneurs Collaborate",
        text: "Are you a creator, entrepreneur, or innovator? connectsMe gives you tools to find collaborators, project partners, content creators, designers, and marketers instantly.",
        img: "/assets/brands/presenter1.jpeg",
        cta: "Find Collaborators"
    },
    {
        title: "Connect Across Borders — Without Limitations",
        text: "Whether you're migrating, travelling, or relocating to a new city, connectsMe helps you find local communities, professionals, and support systems to make your transition smooth.",
        img: "/assets/brands/pilot1.jpeg",
        cta: "Join Global Communities"
    },
    {
        title: "Verified Profiles You Can Trust",
        text: "Every profile on connectsMe prioritizes authenticity. Users showcase real skills, portfolios, education history, and work experience — helping you build trust quickly.",
        img: "/assets/brands/presenter3.jpeg",
        cta: "Browse Profiles"
    },
    {
        title: "Designed for All Professions",
        text: "Doctors, nurses, pilots, engineers, teachers, chefs, technicians, creatives — everyone has a place here. connectsMe brings every profession to one unified digital space.",
        img: "/assets/brands/catering2.jpg",
        cta: "Discover Professionals"
    },
    {
        title: "Your Digital Identity in One Place",
        text: "Showcase your skills, certifications, achievements, work history, and projects. connectsMe becomes your digital identity — accessible anytime, anywhere.",
        img: "/assets/brands/hero-2.webp",
        cta: "Build Your Profile"
    },
    {
        title: "Communities That Empower You",
        text: "Join interest-based groups — tech, medical, aviation, arts, migration, travel, education, and more. Learn, share, grow, and collaborate with people who understand your journey.",
        img: "/assets/brands/catering4.jpg",
        cta: "Explore Communities"
    },
    {
        title: "A Future-Ready Social Platform",
        text: "Our vision goes beyond networking. connectsMe is building a new digital ecosystem where your identity, connections, and opportunities are unified in a single experience.",
        img: "/assets/brands/hero-3.jpg",
        cta: "Be Part of the Future"
    }
];

const ConnectsMeDeepSection: React.FC = () => {
    return (
        <section className="landing-root connectsme-section">
            <h2 className="section-title">Why Millions Will Choose connectsMe</h2>

            <div className="connectsme-cards">
                {deepCards.map((card, index) => (
                    <div 
                        key={index}
                        className={`connectsme-card variant-${(index % 5) + 1}`}
                    >
                        <div className="connectsme-img">
                            <img src={card.img} alt={card.title} />
                        </div>

                        <div className="connectsme-content">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>

                            {/* Modern Responsive Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '999px',
                                    padding: '10px 22px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    textTransform: 'none',
                                    whiteSpace: 'nowrap',
                                    width: 'fit-content',
                                    backgroundColor: '#2563eb',
                                    transition: 'all .25s ease',
                                    '&:hover': {
                                        backgroundColor: '#1e40af',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                {card.cta}
                            </Button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ConnectsMeDeepSection;






