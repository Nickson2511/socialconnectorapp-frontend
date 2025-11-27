import React from "react";
import { Box, Button, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";
import CountUp from "react-countup";

const stats = [
    { label: "Users", value: 1000000, suffix: "+" },
    { label: "Communities", value: 8000, suffix: "+" },
    { label: "Jobs & Gigs", value: 120000, suffix: "+" },
];

const HeroAbout: React.FC = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isDarkMode = theme.palette.mode === "dark";

    // Determine grid columns based on screen size
    const getGridTemplateColumns = () => {
        if (isLg) return "1fr 1fr 1fr";
        if (isMd) return "1fr 1fr 1fr";
        return "1fr";
    };

    return (
        <section
            className={`about-hero landing-root`}
            aria-label="About hero"
            style={{
                background: isDarkMode
                    ? theme.palette.background.default
                    : "linear-gradient(180deg, rgba(99, 102, 241, 0.04), transparent 30%)",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    borderRadius: 3,
                    width: "100%",
                    p: { xs: 2, sm: 3, md: 4 },
                    boxSizing: "border-box",
                    background: isDarkMode
                        ? theme.palette.background.paper
                        : "rgba(255,255,255,0.95)",
                    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                    backdropFilter: "blur(8px)",
                    boxShadow: isDarkMode
                        ? "0 10px 25px rgba(0,0,0,0.3)"
                        : "0 10px 25px rgba(0,0,0,0.05)",
                    color: isDarkMode ? theme.palette.text.primary : "#111",
                }}
            >
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
                    {/* Text + Buttons */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <div
                            className="kicker"
                            style={{ color: isDarkMode ? theme.palette.text.secondary : "#6b7280" }}
                        >
                            About connectsMe
                        </div>
                        <Typography
                            variant="h3"
                            component="h1"
                            className="about-title"
                            sx={{ color: isDarkMode ? theme.palette.text.primary : "#111" }}
                        >
                            A community-first network for real professional growth
                        </Typography>
                        <Typography
                            className="about-sub"
                            sx={{ color: isDarkMode ? theme.palette.text.secondary : "#374151" }}
                        >
                            We connect talent with meaningful opportunities — verified, curated, and community-backed.
                            Build a profile, join a community, and meet the right people for your next step.
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
                            <Button
                                variant="contained"
                                className="primary-cta"
                                sx={{
                                    backgroundColor: isDarkMode ? "#3b82f6" : undefined,
                                    color: isDarkMode ? "#fff" : undefined,
                                    "&:hover": {
                                        backgroundColor: isDarkMode ? "#1e3a8a" : undefined,
                                    },
                                }}
                            >
                                Create a Profile
                            </Button>
                            <Button
                                variant="outlined"
                                className="secondary-cta"
                                sx={{
                                    borderColor: isDarkMode ? "#3b82f6" : undefined,
                                    color: isDarkMode ? "#3b82f6" : undefined,
                                    "&:hover": {
                                        borderColor: isDarkMode ? "#1e3a8a" : undefined,
                                        color: isDarkMode ? "#1e3a8a" : undefined,
                                    },
                                }}
                            >
                                Our Philosophy
                            </Button>
                        </Box>
                    </Box>

                    {/* Stats */}
                    {stats.map((s) => (
                        <Paper
                            key={s.label}
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                background: isDarkMode
                                    ? theme.palette.background.default
                                    : "rgba(255,255,255,0.8)",
                                border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                                textAlign: "center",
                                minWidth: 120,
                                flex: "1",
                                color: isDarkMode ? theme.palette.text.primary : "#111",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 700, mb: 1 }}
                            >
                                <CountUp
                                    end={s.value}
                                    duration={2.2}
                                    separator=","
                                    suffix={s.suffix}
                                />
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: isDarkMode ? theme.palette.text.secondary : "#6b7280" }}
                            >
                                {s.label}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Paper>
        </section>
    );
};

export default HeroAbout;






