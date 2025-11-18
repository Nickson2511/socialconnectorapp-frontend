import React from "react";
import { Box, Button, Typography } from "@mui/material";
import useSlideshow from "../../hooks/useSlideshow";

const slides = [
    { src: "/assets/brands/hero-1.webp", alt: "Professional networking" },
    { src: "/assets/brands/hero-2.webp", alt: "Find collaborators" },
    { src: "/assets/brands/hero-3.jpg", alt: "Grow your career" }
];

const Hero: React.FC = () => {
    const { index } = useSlideshow(slides.length, 5000);

    return (
        <section className="landing-root">
            <div className="hero">
                <div className="hero-left">
                    <div className="kicker">SocialConnector</div>
                    <Typography component="h1" className="hero-title">
                        Connect. Collaborate. Grow — a modern LinkedIn alternative.
                    </Typography>
                    <Typography className="hero-sub">
                        Build meaningful professional relationships, discover gigs and projects, and showcase your work in visually rich profiles.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Button variant="contained" size="large" aria-label="Get started">Get Started</Button>
                        <Button variant="outlined" size="large" aria-label="Learn more">Learn More</Button>
                    </Box>
                </div>

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
