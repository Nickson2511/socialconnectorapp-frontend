import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
    { q: "Who is connectsMe for?", a: "Students, graduates, professionals, creators, entrepreneurs and teams searching for mentorship, collaborators, jobs and community." },
    { q: "How do you verify profiles?", a: "We combine self-declared credentials, community signals, and optional third-party verification for professionals and organisations." },
    { q: "Is there a free tier?", a: "Yes — core features are free. Premium features (advanced matching, verified badges, and organization tools) are unlockable." },
];

const FAQ: React.FC = () => (
    <section className="about-section landing-root">
        <Typography variant="h4" className="section-title">Frequently asked</Typography>

        <div className="faq-grid">
            {faqs.map((f, i) => (
                <Accordion key={i} elevation={2}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{f.q}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">{f.a}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    </section>
);

export default FAQ;
