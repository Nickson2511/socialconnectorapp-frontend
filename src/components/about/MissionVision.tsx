import React from "react";
import { Typography, Button, Paper, Box, useTheme, useMediaQuery } from "@mui/material";

const MissionVision: React.FC = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));


    const getGridTemplateColumns = () => {
        if (isLg) return "repeat(3, 1fr)";
        if (isMd) return "repeat(3, 1fr)";
        return "1fr";
    };

    const cards = [
        {
            title: "Our Mission",
            text: "Make professional growth accessible and collaborative — through trustworthy profiles, curated communities and actionable opportunities.",
            buttonText: "Join Our Mission",
            buttonVariant: "contained",
        },
        {
            title: "Our Vision",
            text: "A world where talent finds the right stage — where mentorship, work and community converge to build careers and businesses.",
            buttonText: "Explore the Vision",
            buttonVariant: "outlined",
        },
        {
            title: "How We Work",
            text: "We focus on clarity: verified signals, community moderation, and tooling that prioritizes collaboration over attention.",
            buttonText: "Discover Our Process",
            buttonVariant: "contained",
        },
    ];

    return (
        <section className="about-section landing-root">
            {/* Full-width Paper */}
            <Paper
                elevation={3}
                sx={{
                    borderRadius: 3,
                    width: "100%",
                    p: { xs: 2, sm: 3, md: 4 },
                    boxSizing: "border-box",
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                }}
            >
                {/* Grid without maxWidth to occupy full width */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: getGridTemplateColumns(),
                        gap: 4,
                        alignItems: "center",
                        maxWidth: "100%",
                        margin: "0 auto",

                    }}
                >
                    {cards.map((card) => (
                        <Paper
                            key={card.title}
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                background: "rgba(255,255,255,0.85)",
                                border: "1px solid rgba(0,0,0,0.06)",
                                boxShadow: "0 6px 18px rgba(14,22,39,0.03)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                minHeight: 180,
                            }}
                        >
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: "#374151" }}>
                                    {card.text}
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Button
                                    variant={card.buttonVariant as "contained" | "outlined"}
                                    className={card.buttonVariant === "contained" ? "primary-cta" : "secondary-cta"}
                                >
                                    {card.buttonText}
                                </Button>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Paper>
        </section>
    );
};

export default MissionVision;





