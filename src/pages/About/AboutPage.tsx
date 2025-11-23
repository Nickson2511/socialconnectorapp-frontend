import React from "react";
import { Box, Button, Typography, Avatar, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/landing/Header";
import FooterLanding from "../../components/landing/FooterLanding";
import "../../styles/About.css";

interface AboutPageProps {
    toggleTheme: () => void;
    currentMode: "light" | "dark";
}

const stats = [
    { label: "Users", value: "1M+" },
    { label: "Communities", value: "8K+" },
    { label: "Jobs & Gigs", value: "120K+" },
];

const team = [
    { name: "Aisha K.", role: "Head of Product", avatar: "/assets/about/aisha.jpeg" },
    { name: "Nickson2511", role: "Engineering Lead", avatar: "/assets/about/Nickson2511.jpeg" },
    { name: "Moses L.", role: "Design & Growth", avatar: "/assets/about/moses.webp" },
];


const timeline = [
    { year: "2021", title: "Founded", desc: "connectsMe launched to help students & young pros find mentors." },
    { year: "2022", title: "Discovery Engine", desc: "Released smart discovery and matching features for talent & opportunities." },
    { year: "2023", title: "Communities", desc: "Introduced private collaboration rooms and niche communities." },
    { year: "2024", title: "Global Reach", desc: "Expanded to new countries and integrated localization features." },
];

const faqs = [
    { q: "Who is connectsMe for?", a: "Students, graduates, professionals, creators, entrepreneurs and teams searching for mentorship, collaborators, jobs and community." },
    { q: "How do you verify profiles?", a: "We combine self-declared credentials, community signals, and optional third-party verification for professionals and organisations." },
    { q: "Is there a free tier?", a: "Yes — core features are free. Premium features (advanced matching, verified badges, and organization tools) are unlockable." },
];

const AboutHero: React.FC = () => (
    <section className="about-hero landing-root">
        <div className="about-hero-inner">
            <div className="about-hero-copy">
                <div className="kicker">About connectsMe</div>
                <Typography variant="h3" component="h1" className="about-title">
                    A community-first network for real professional growth
                </Typography>
                <Typography className="about-sub">
                    We designed connectsMe to close the gap between talent and opportunity — not by boosting noise,
                    but by amplifying meaningful, verifiable connections across industries and borders.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
                    <Button variant="contained" sx={{ borderRadius: "999px", padding: "10px 26px", fontWeight: 600 }}>
                        Create a Profile
                    </Button>
                    <Button variant="outlined" sx={{ borderRadius: "999px", padding: "10px 26px", fontWeight: 600 }}>
                        Our Philosophy
                    </Button>
                </Box>
            </div>

            <div className="about-hero-media" aria-hidden>
                {/* stylized card stack + value stats */}
                <Paper elevation={6} className="about-stats-card">
                    <div className="about-stats">
                        {stats.map((s) => (
                            <div key={s.label} className="about-stat">
                                <div className="about-stat-value">{s.value}</div>
                                <div className="about-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </Paper>
            </div>
        </div>
    </section>
);

const MissionVision: React.FC = () => (
    <section className="about-section landing-root">
        <div className="mv-grid">
            <div className="mv-card">
                <Typography variant="h5">Our Mission</Typography>
                <Typography className="mv-text">
                    Make professional growth accessible and collaborative — through trustworthy profiles, curated communities and actionable opportunities.
                </Typography>
            </div>

            <div className="mv-card">
                <Typography variant="h5">Our Vision</Typography>
                <Typography className="mv-text">
                    A world where talent finds the right stage — where mentorship, work and community converge to build careers and businesses.
                </Typography>
            </div>

            <div className="mv-card">
                <Typography variant="h5">How We Work</Typography>
                <Typography className="mv-text">
                    We focus on clarity: verified signals, community moderation, and tooling that prioritizes collaboration over attention.
                </Typography>
            </div>
        </div>
    </section>
);

const TeamSection: React.FC = () => (
    <section className="about-section landing-root">
        <Typography variant="h4" className="section-title">People behind connectsMe</Typography>
        <div className="team-grid">
            {team.map((m) => (
                <div key={m.name} className="team-card">
                    <Avatar src={m.avatar} alt={m.name} sx={{ width: 72, height: 72 }} />
                    <div>
                        <Typography variant="subtitle1">{m.name}</Typography>
                        <Typography variant="body2" className="muted">{m.role}</Typography>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const TimelineSection: React.FC = () => (
    <section className="about-section landing-root">
        <Typography variant="h4" className="section-title">Our Journey</Typography>

        <div className="timeline">
            {timeline.map((t, i) => (
                <div key={t.year} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-body">
                        <Typography variant="h6">{t.title}</Typography>
                        <Typography variant="body2" className="muted">{t.desc}</Typography>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const FAQSection: React.FC = () => (
    <section className="about-section landing-root">
        <Typography variant="h4" className="section-title">Frequently asked</Typography>
        <div className="faq-grid">
            {faqs.map((f, i) => (
                <Accordion key={i}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{f.q}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">{f.a}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    </section>
);

const AboutCTA: React.FC = () => (
    <section className="about-cta landing-root">
        <Paper elevation={3} sx={{ padding: "2rem", borderRadius: 4 }}>
            <div className="about-cta-inner">
                <div>
                    <Typography variant="h5">Ready to join a purposeful network?</Typography>
                    <Typography className="muted">Create a profile and start connecting with mentors, collaborators and opportunities.</Typography>
                </div>

                <div className="about-cta-actions">
                    <Button variant="contained" sx={{ borderRadius: "999px", padding: "10px 26px", fontWeight: 600 }}>
                        Sign Up — It's Free
                    </Button>
                    <Button variant="outlined" sx={{ borderRadius: "999px", padding: "10px 26px", fontWeight: 600 }}>
                        Talk to Sales
                    </Button>
                </div>
            </div>
        </Paper>
    </section>
);

const AboutPage: React.FC<AboutPageProps> = ({ toggleTheme, currentMode }) => {
    return (
        <main>
            <Header toggleTheme={toggleTheme} currentMode={currentMode} />
            <AboutHero />
            <MissionVision />
            <TeamSection />
            <TimelineSection />
            <FAQSection />
            <AboutCTA />
            <FooterLanding />
        </main>
    );
};

export default AboutPage;
