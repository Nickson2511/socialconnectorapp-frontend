import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import BoltIcon from "@mui/icons-material/Bolt";

const values = [
    { icon: <VerifiedUserIcon />, title: "Trusted Profiles", text: "Profiles backed by signals and optional verification." },
    { icon: <PeopleIcon />, title: "Community First", text: "Communities built to help people collaborate & learn." },
    { icon: <BoltIcon />, title: "Fast Discovery", text: "Smart matching that surfaces opportunities fast." },
];

const Values: React.FC = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <section
            className="about-section landing-root"
            style={{
                background: isDarkMode
                    ? theme.palette.background.default
                    : "linear-gradient(180deg, rgba(99,102,241,0.04), transparent 30%)",
                color: isDarkMode ? theme.palette.text.primary : undefined,
                padding: "2rem 1rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    flexWrap: "wrap",
                    mb: 3,
                }}
            >
                <div>
                    <div className="kicker" style={{ color: isDarkMode ? theme.palette.primary.light : undefined }}>
                        Our values
                    </div>
                    <Typography
                        variant="h5"
                        sx={{ color: isDarkMode ? theme.palette.text.primary : undefined }}
                    >
                        Built on trust, not attention
                    </Typography>
                </div>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
                    gap: 3,
                }}
            >
                {values.map((v, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
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
                        <Box
                            sx={{
                                fontSize: 40,
                                color: isDarkMode ? theme.palette.primary.main : "#2563eb",
                            }}
                        >
                            {v.icon}
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: isDarkMode ? theme.palette.text.primary : undefined }}
                            >
                                {v.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mt: 0.5, color: isDarkMode ? theme.palette.text.secondary : "#6b7280" }}
                            >
                                {v.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </section>
    );
};

export default Values;






