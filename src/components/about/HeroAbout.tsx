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

    // Determine grid columns based on screen size
    const getGridTemplateColumns = () => {
        if (isLg) return "1fr 1fr 1fr";
        if (isMd) return "1fr 1fr 1fr";
        return "1fr";
    };

    return (
        <section className="about-hero landing-root" aria-label="About hero">
            {/* Full-width Card */}
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
                        <div className="kicker">About connectsMe</div>
                        <Typography variant="h3" component="h1" className="about-title">
                            A community-first network for real professional growth
                        </Typography>
                        <Typography className="about-sub">
                            We connect talent with meaningful opportunities — verified, curated, and community-backed.
                            Build a profile, join a community, and meet the right people for your next step.
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
                            <Button variant="contained" className="primary-cta">
                                Create a Profile
                            </Button>
                            <Button variant="outlined" className="secondary-cta">
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
                                background: "rgba(255,255,255,0.8)",
                                border: "1px solid rgba(0,0,0,0.06)",
                                textAlign: "center",
                                minWidth: 120,
                                flex: "1",
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
                                sx={{ color: "#6b7280" }}
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




