import React from "react";
import { Avatar, Typography } from "@mui/material";

const testimonials = [
    { name: "Aisha K.", text: "SocialConnector helped me find my first remote collaborator in 2 days." },
    { name: "David M.", text: "Our small agency sourced 3 contractors using the discovery engine — love it." }
];

const Testimonials: React.FC = () => (
    <section className="landing-root">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <div className="kicker">Trusted by teams</div>
                <Typography variant="h5" sx={{ mt: 0.5 }}>What people say</Typography>
            </div>
        </div>

        <div className="testimonials" style={{ marginTop: "1rem" }}>
            {testimonials.map((t, i) => (
                <div key={i} className="card" role="article">
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <Avatar>{t.name[0]}</Avatar>
                        <div>
                            <Typography variant="subtitle2">{t.name}</Typography>
                        </div>
                    </div>
                    <Typography variant="body2" sx={{ mt: 1 }}>{t.text}</Typography>
                </div>
            ))}
        </div>
    </section>
);

export default Testimonials;
