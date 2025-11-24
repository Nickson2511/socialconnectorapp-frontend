import React from "react";
import { Paper, Typography, Button } from "@mui/material";

const AboutCTA: React.FC = () => (
    <section className="about-cta landing-root" aria-label="About call to action">
        <Paper elevation={3} sx={{ padding: "2rem", borderRadius: 4 }}>
            <div className="about-cta-inner">
                <div>
                    <Typography variant="h5">Ready to join a purposeful network?</Typography>
                    <Typography className="muted">Create a profile and start connecting with mentors, collaborators and opportunities.</Typography>
                </div>

                <div className="about-cta-actions">
                    <Button variant="contained" className="primary-cta">
                        Sign Up — It's Free
                    </Button>
                    <Button variant="outlined" className="secondary-cta">
                        Talk to Sales
                    </Button>
                </div>
            </div>
        </Paper>
    </section>
);

export default AboutCTA;
