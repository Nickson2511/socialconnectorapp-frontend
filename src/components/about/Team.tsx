import React from "react";
import { Avatar, Typography } from "@mui/material";

const team = [
    { name: "Aisha K.", role: "Head of Product", avatar: "/assets/about/aisha.jpeg" },
    { name: "Nickson2511", role: "Engineering Lead", avatar: "/assets/about/Nickson2511.jpeg" },
    { name: "Moses L.", role: "Design & Growth", avatar: "/assets/about/moses.webp" },
];

const Team: React.FC = () => (
    <section className="about-section landing-root">
        <Typography variant="h4" className="section-title">People behind connectsMe</Typography>

        <div className="team-grid">
            {team.map((m) => (
                <div key={m.name} className="team-card">
                    <Avatar src={m.avatar} alt={m.name} sx={{ width: 72, height: 72 }} />
                    <div>
                        <Typography variant="subtitle1">{m.name}</Typography>
                        <Typography variant="body2" className="muted">{m.role}</Typography>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Team;
