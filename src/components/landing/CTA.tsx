import React from "react";
import { Button, Typography } from "@mui/material";

const CTA: React.FC = () => (
    <section className="landing-root">
        <div className="cta">

            <div className="cta-text">
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#ffffff" }}>
                    Ready to build meaningful connections?
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        opacity: 0.95,
                        mt: 0.5,
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.05rem"
                    }}
                >
                    Create your profile, join communities and find projects — for free.
                </Typography>
            </div>

            <div className="cta-buttons">
                {/* Primary Button */}
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "none",
                        color: "#ffffff",
                        backgroundColor: "#4f46e5",
                        "&:hover": {
                            backgroundColor: "#4338ca",
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Create Account
                </Button>

                {/* Outline Button */}
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        borderRadius: "999px",
                        padding: "12px 28px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        borderWidth: "2px",
                        color: "#ffffff",
                        borderColor: "#ffffff",
                        transition: "all 0.25s ease",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.15)",
                            borderColor: "#e2e8f0",
                            color: "#e2e8f0",
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Contact Sales
                </Button>
            </div>

        </div>
    </section>
);

export default CTA;





