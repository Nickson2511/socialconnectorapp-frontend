import React from "react";
import { Avatar, Typography, Box, useTheme } from "@mui/material";

const team = [
    { name: "Aisha K.", role: "Head of Product", avatar: "/assets/about/aisha.jpeg" },
    { name: "Nickson2511", role: "Engineering Lead", avatar: "/assets/about/Nickson2511.jpeg" },
    { name: "Moses L.", role: "Design & Growth", avatar: "/assets/about/moses.webp" },
];

const Team: React.FC = () => {
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
                People behind connectsMe
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
                    gap: 4,
                }}
            >
                {team.map((m) => (
                    <Box
                        key={m.name}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 2,
                            borderRadius: 2,
                            background: isDarkMode
                                ? theme.palette.background.paper
                                : "rgba(255,255,255,0.85)",
                            boxShadow: isDarkMode
                                ? "0 4px 12px rgba(0,0,0,0.3)"
                                : "0 4px 12px rgba(14,22,39,0.05)",
                        }}
                    >
                        <Avatar src={m.avatar} alt={m.name} sx={{ width: 72, height: 72 }} />
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: isDarkMode ? theme.palette.text.primary : undefined }}
                            >
                                {m.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: isDarkMode ? theme.palette.text.secondary : "#6b7280" }}
                            >
                                {m.role}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </section>
    );
};

export default Team;
