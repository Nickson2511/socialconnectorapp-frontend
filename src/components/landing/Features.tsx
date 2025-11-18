import React from "react";
import { Typography } from "@mui/material";

const FeatureItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="card">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="landing-root" style={{ paddingTop: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <div className="kicker">Features</div>
                    <Typography variant="h5" sx={{ mt: 0.5 }}>Designed for professionals and teams</Typography>
                </div>
            </div>

            <div className="cards" style={{ marginTop: "1rem" }}>
                <FeatureItem title="Smart Profiles" desc="Showcase curated projects, articles, and live demos — rich media first." />
                <FeatureItem title="Collaboration Spaces" desc="Private project rooms to discuss, track tasks and ship work." />
                <FeatureItem title="Discovery Engine" desc="Match with opportunities, mentors and talent using smart filters." />
            </div>
        </section>
    );
};

export default Features;
