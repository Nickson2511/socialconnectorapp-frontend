import React from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PublicIcon from '@mui/icons-material/Public';

const features = [
    {
        icon: <GroupsIcon sx={{ fontSize: 32, color: "#4f46e5" }} />,
        title: "Engage With Communities",
        description: "Discover and join interest-based groups. Collaborate, share knowledge, and grow together."
    },
    {
        icon: <WorkOutlineIcon sx={{ fontSize: 32, color: "#2563eb" }} />,
        title: "Collaborate on Projects",
        description: "Find professionals, creators, and mentors to work with on meaningful projects."
    },
    {
        icon: <PublicIcon sx={{ fontSize: 32, color: "#4f46e5" }} />,
        title: "Global Connections",
        description: "Connect with users worldwide and expand your network across borders."
    }
];

const ConnectsMeEngageSection: React.FC = () => {
    return (
        <section className="landing-root engage-section">
            <Paper
                elevation={3}
                sx={{
                    padding: "4rem 2rem",
                    borderRadius: "20px",
                    backgroundColor: "#f9fafb",
                    width: "100%",
                    margin: "0",
                    boxSizing: "border-box",

                }}
            >
                <Box className="engage-content">
                    {/* Header */}
                    <div className="engage-header">
                        <Typography variant="h4" className="engage-title">
                            Experience connectsMe Like Never Before
                        </Typography>
                        <Typography variant="body1" className="engage-sub">
                            Join a platform that empowers you to connect, collaborate, and grow with purpose.
                            Every interaction is meaningful, every opportunity real.
                        </Typography>
                    </div>

                    {/* Feature Cards */}
                    <Box className="engage-cards">
                        {features.map((feature, index) => (
                            <div key={index} className="engage-card">
                                <Box className="engage-icon">{feature.icon}</Box>
                                <Typography variant="h6" className="engage-card-title">
                                    {feature.title}
                                </Typography>
                                <Typography className="engage-card-desc">
                                    {feature.description}
                                </Typography>
                            </div>
                        ))}
                    </Box>

                    {/* Call to Action Buttons */}
                    <Box className="engage-buttons">
                        <Button variant="contained" className="engage-btn-primary">
                            Create Your Profile
                        </Button>
                        <Button variant="outlined" className="engage-btn-secondary">
                            Explore Opportunities
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </section>
    );
};

export default ConnectsMeEngageSection;






