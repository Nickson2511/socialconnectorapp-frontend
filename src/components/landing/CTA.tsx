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
                        padding: "12px 28px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        backgroundColor: "#ffffff",
                        color: "#2563eb",
                        transition: "all 0.25s ease",
                        "&:hover": {
                            backgroundColor: "#e2e8f0",
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





// import React from "react";
// import { Button, Typography } from "@mui/material";

// const CTA: React.FC = () => (
//     <section className="landing-root">
//         <div className="cta">
//             <div style={{ flex: 1 }}>
//                 <Typography variant="h6">Ready to build meaningful connections?</Typography>
//                 <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
//                     Create your profile, join communities and find projects — for free.
//                 </Typography>
//             </div>
//             <div style={{ display: "flex", gap: 12 }}>
//                 <Button variant="contained" size="large">Create Account</Button>
//                 <Button variant="outlined" size="large">Contact Sales</Button>
//             </div>
//         </div>
//     </section>
// );

// export default CTA;
