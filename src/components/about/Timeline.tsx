import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const timeline = [
    { year: "2021", title: "Founded", desc: "connectsMe launched to help students & young pros find mentors." },
    { year: "2022", title: "Discovery Engine", desc: "Released smart discovery and matching features for talent & opportunities." },
    { year: "2023", title: "Communities", desc: "Introduced private collaboration rooms and niche communities." },
    { year: "2024", title: "Global Reach", desc: "Expanded to new countries and integrated localization features." },
];

const Timeline: React.FC = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <section
            className="about-section landing-root"
            style={{
                background: isDarkMode ? theme.palette.background.default : "linear-gradient(180deg, rgba(99,102,241,0.04), transparent 30%)",
                color: isDarkMode ? theme.palette.text.primary : undefined,
                padding: "2rem 1rem",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    color: isDarkMode ? theme.palette.text.primary : undefined,
                }}
            >
                Our Journey
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}
            >
                {timeline.map((t, i) => (
                    <Box
                        key={t.year}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: i % 2 === 0 ? "row" : "row-reverse" },
                            alignItems: "flex-start",
                            gap: 3,
                        }}
                    >
                        <Box
                            sx={{
                                minWidth: 80,
                                fontWeight: 700,
                                color: isDarkMode ? theme.palette.primary.light : "#2563eb",
                                fontSize: "1.25rem",
                            }}
                        >
                            {t.year}
                        </Box>

                        <Box
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                background: isDarkMode ? theme.palette.background.paper : "rgba(255,255,255,0.85)",
                                boxShadow: isDarkMode ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 12px rgba(14,22,39,0.05)",
                                flex: 1,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, mb: 1, color: isDarkMode ? theme.palette.text.primary : undefined }}
                            >
                                {t.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: isDarkMode ? theme.palette.text.secondary : "#6b7280" }}
                            >
                                {t.desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </section>
    );
};

export default Timeline;
