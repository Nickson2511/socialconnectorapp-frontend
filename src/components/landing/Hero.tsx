import React from "react";
import { Box, Button, Typography, Card } from "@mui/material";
import useSlideshow from "../../hooks/useSlideshow";

const slides = [
    { src: "/assets/brands/hero-1.webp", alt: "Professional networking" },
    { src: "/assets/brands/hero-2.webp", alt: "Find collaborators" },
    { src: "/assets/brands/hero-3.jpg", alt: "Grow your career" },
    { src: "/assets/brands/medical1.jpg", alt: "Connect with professional doctors" },
    { src: "/assets/brands/nurse1.jpeg", alt: "Connect with professional nurses" },
    { src: "/assets/brands/nurse2.jpeg", alt: "Connect with professional nurses" },
    { src: "/assets/brands/pilot1.jpeg", alt: "Connect with professional pilots" },
    { src: "/assets/brands/pilot2.webp", alt: "Connect with professional pilots" },
    { src: "/assets/brands/pilot3.jpeg", alt: "Connect with professional pilots" },
    { src: "/assets/brands/presenter1.jpeg", alt: "Connect with professional presenters" },
    { src: "/assets/brands/presenter2.jpeg", alt: "Connect with professional presenters" },
    { src: "/assets/brands/presenter3.jpeg", alt: "Connect with professional presenters" },
    { src: "/assets/brands/catering1.jpg", alt: "Connect with professional Chefs " },
    { src: "/assets/brands/catering2.jpg", alt: "Connect with professional Chefs" },
    { src: "/assets/brands/catering3.jpg", alt: "Connect with professional Chefs" },
    { src: "/assets/brands/catering4.jpg", alt: "Connect with professional Chefs" }
];

const Hero: React.FC = () => {
    const { index } = useSlideshow(slides.length, 5000);

    return (
        <section className="landing-root">
            <div className="hero">

                <Card className="hero-card" elevation={6}>
                    <div className="hero-card-inner">
                        <div className="kicker">connectsMe</div>

                        <Typography component="h1" className="hero-title">
                            Connect. Collaborate. Grow.
                        </Typography>

                        <Typography className="hero-sub">
                            A modern way to reach your connections—whether you're a student,
                            job seeker, traveller, or creator. connectsMe enhances professional
                            communities and removes the limitations of traditional platforms.
                        </Typography>

                        <Typography className="hero-desc">
                            Register for free and access features like job applications,
                            social groups, migration/settlement support, project collaborators,
                            communities, and national-wide digital networking.
                        </Typography>

                        {/* Updated Buttons */}
                        <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
                            
                            {/* Primary Button */}
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    borderRadius: "999px",
                                    padding: "12px 32px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    whiteSpace: "nowrap",
                                    backgroundColor: "#2563eb",
                                    transition: "all .25s ease",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                    "&:hover": {
                                        backgroundColor: "#1e40af",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 8px 16px rgba(0,0,0,0.20)",
                                    },
                                }}
                            >
                                Get Started
                            </Button>

                            {/* Outline Button */}
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderRadius: "999px",
                                    padding: "12px 32px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    whiteSpace: "nowrap",
                                    borderWidth: "2px",
                                    color: "#2563eb",
                                    borderColor: "#2563eb",
                                    transition: "all .25s ease",
                                    "&:hover": {
                                        borderColor: "#1e40af",
                                        color: "#1e40af",
                                        transform: "translateY(-2px)",
                                        backgroundColor: "rgba(37,99,235,0.08)",
                                    },
                                }}
                            >
                                Learn More
                            </Button>

                        </Box>
                    </div>
                </Card>

                {/* Hero rotating slideshow */}
                <div className="hero-visual" aria-hidden>
                    {slides.map((s, i) => (
                        <div
                            key={s.src}
                            className={`hero-slide ${i === index ? "active" : ""}`}
                            style={{ backgroundImage: `url(${s.src})` }}
                            role="img"
                            aria-label={s.alt}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;














