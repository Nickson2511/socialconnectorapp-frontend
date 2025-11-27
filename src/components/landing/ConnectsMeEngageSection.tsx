import React from "react";
import { Box, Card, CardContent, Button, Typography, useTheme } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PublicIcon from "@mui/icons-material/Public";

const engageFeatures = [
    {
        icon: <GroupsIcon fontSize="large" sx={{ color: "#4f46e5" }} />,
        title: "Engage With Communities",
        description:
            "Discover and join interest-based groups. Collaborate, share knowledge, and grow together.",
    },
    {
        icon: <WorkOutlineIcon fontSize="large" sx={{ color: "#2563eb" }} />,
        title: "Collaborate on Projects",
        description:
            "Find professionals, creators, and mentors to work with on meaningful projects.",
    },
    {
        icon: <PublicIcon fontSize="large" sx={{ color: "#4f46e5" }} />,
        title: "Global Connections",
        description:
            "Connect with users worldwide and expand your network across borders.",
    },
];

const ConnectsMeEngageSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, sm: 8 },
                px: { xs: 2, sm: 4 },
                background:
                    theme.palette.mode === "dark"
                        ? "#1e293b"
                        : "linear-gradient(180deg, #f9fafc, #ffffff)",
                color: theme.palette.text.primary,
            }}
        >
            {/* Section Header */}
            <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center", mb: 6 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Experience connectsMe Like Never Before
                </Typography>
                <Typography
                    variant="body1"
                    color={theme.palette.text.secondary}
                    sx={{ mt: 1 }}
                >
                    Join a platform that empowers you to connect, collaborate, and grow with
                    purpose. Every interaction is meaningful, every opportunity real.
                </Typography>
            </Box>

            {/* Feature Cards */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
                    gap: 4,
                    maxWidth: 1200,
                    mx: "auto",
                }}
            >
                {engageFeatures.map((feature, index) => (
                    <Card
                        key={index}
                        elevation={4}
                        sx={{
                            borderRadius: 3,
                            bgcolor: theme.palette.mode === "dark" ? "#1e293b" : "#fff",
                            color: theme.palette.text.primary,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            p: 3,
                            gap: 2,
                            transition: "transform 0.25s ease, box-shadow 0.25s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: theme.shadows[8],
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                background:
                                    theme.palette.mode === "dark"
                                        ? "rgba(79, 70, 229, 0.15)"
                                        : "rgba(79, 70, 229, 0.1)",
                                mb: 1,
                            }}
                        >
                            {feature.icon}
                        </Box>
                        <CardContent sx={{ p: 0 }}>
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={theme.palette.text.secondary}
                            >
                                {feature.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Call to Action Buttons */}
            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    flexWrap: "wrap",
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "999px",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        background: "linear-gradient(135deg, #4f46e5, #2563eb)",
                        "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 12px 30px rgba(79, 70, 229, 0.35)",
                        },
                    }}
                >
                    Create Your Profile
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: "999px",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderColor: "#4f46e5",
                        color: "#4f46e5",
                        "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 12px 30px rgba(79, 70, 229, 0.2)",
                        },
                    }}
                >
                    Explore Opportunities
                </Button>
            </Box>
        </Box>
    );
};

export default ConnectsMeEngageSection;





// import React from "react";
// import { Button, Typography, Box, Paper } from "@mui/material";
// import GroupsIcon from '@mui/icons-material/Groups';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import PublicIcon from '@mui/icons-material/Public';

// const features = [
//     {
//         icon: <GroupsIcon sx={{ fontSize: 32, color: "#4f46e5" }} />,
//         title: "Engage With Communities",
//         description: "Discover and join interest-based groups. Collaborate, share knowledge, and grow together."
//     },
//     {
//         icon: <WorkOutlineIcon sx={{ fontSize: 32, color: "#2563eb" }} />,
//         title: "Collaborate on Projects",
//         description: "Find professionals, creators, and mentors to work with on meaningful projects."
//     },
//     {
//         icon: <PublicIcon sx={{ fontSize: 32, color: "#4f46e5" }} />,
//         title: "Global Connections",
//         description: "Connect with users worldwide and expand your network across borders."
//     }
// ];

// const ConnectsMeEngageSection: React.FC = () => {
//     return (
//         <section className="landing-root engage-section">
//             <Paper
//                 elevation={3}
//                 sx={{
//                     padding: "4rem 2rem",
//                     borderRadius: "20px",
//                     backgroundColor: "#f9fafb",
//                     width: "100%",
//                     margin: "0",
//                     boxSizing: "border-box",

//                 }}
//             >
//                 <Box className="engage-content">
//                     {/* Header */}
//                     <div className="engage-header">
//                         <Typography variant="h4" className="engage-title">
//                             Experience connectsMe Like Never Before
//                         </Typography>
//                         <Typography variant="body1" className="engage-sub">
//                             Join a platform that empowers you to connect, collaborate, and grow with purpose.
//                             Every interaction is meaningful, every opportunity real.
//                         </Typography>
//                     </div>

//                     {/* Feature Cards */}
//                     <Box className="engage-cards">
//                         {features.map((feature, index) => (
//                             <div key={index} className="engage-card">
//                                 <Box className="engage-icon">{feature.icon}</Box>
//                                 <Typography variant="h6" className="engage-card-title">
//                                     {feature.title}
//                                 </Typography>
//                                 <Typography className="engage-card-desc">
//                                     {feature.description}
//                                 </Typography>
//                             </div>
//                         ))}
//                     </Box>

//                     {/* Call to Action Buttons */}
//                     <Box className="engage-buttons">
//                         <Button variant="contained" className="engage-btn-primary">
//                             Create Your Profile
//                         </Button>
//                         <Button variant="outlined" className="engage-btn-secondary">
//                             Explore Opportunities
//                         </Button>
//                     </Box>
//                 </Box>
//             </Paper>
//         </section>
//     );
// };

// export default ConnectsMeEngageSection;






