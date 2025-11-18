import React from "react";
import { Button, Typography } from "@mui/material";

const CTA: React.FC = () => (
    <section className="landing-root">
        <div className="cta">
            <div style={{ flex: 1 }}>
                <Typography variant="h6">Ready to build meaningful connections?</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                    Create your profile, join communities and find projects — for free.
                </Typography>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
                <Button variant="contained" size="large">Create Account</Button>
                <Button variant="outlined" size="large">Contact Sales</Button>
            </div>
        </div>
    </section>
);

export default CTA;
