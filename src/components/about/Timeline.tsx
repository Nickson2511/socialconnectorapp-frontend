import React from "react";
import { Typography } from "@mui/material";

const timeline = [
    { year: "2021", title: "Founded", desc: "connectsMe launched to help students & young pros find mentors." },
    { year: "2022", title: "Discovery Engine", desc: "Released smart discovery and matching features for talent & opportunities." },
    { year: "2023", title: "Communities", desc: "Introduced private collaboration rooms and niche communities." },
    { year: "2024", title: "Global Reach", desc: "Expanded to new countries and integrated localization features." },
];

const Timeline: React.FC = () => (
    <section className="about-section landing-root">
        <Typography variant="h4" className="section-title">Our Journey</Typography>

        <div className="timeline">
            {timeline.map((t, i) => (
                <div key={t.year} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-body">
                        <Typography variant="h6">{t.title}</Typography>
                        <Typography variant="body2" className="muted">{t.desc}</Typography>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Timeline;
