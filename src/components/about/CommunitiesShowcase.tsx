import React, { useState } from "react";
import {
    Button,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Community = {
    key: string;
    name: string;
    img: string;
    short: string;
    full: string;
};

const communities: Community[] = [
    {
        key: "software",
        name: "Software Engineers",
        img: "/assets/about/softwareE.jpeg",
        short:
            "Build scalable systems, design architectures and ship products that power modern apps, platforms, and services.",
        full:
            "Software engineers design, build and maintain the backbone of digital products and services. They work across a spectrum of systems — from backend services that process millions of requests per day to client-side applications that deliver seamless user experiences. Beyond writing code, engineers break complex problems into manageable components, design robust system architectures, perform rigorous testing, and implement monitoring and observability to keep systems healthy. They collaborate with product managers, designers, QA, and operations to continuously iterate and deliver value. Modern software engineers also focus on reliability, security, and performance: they write clean, maintainable code, apply design patterns judiciously, and automate repetitive workflows. Whether working in startups or large organizations, their craft enables companies to scale, reach customers, and innovate. connectsMe connects software engineers with peers, mentors, and opportunities where they can grow technically and lead impactful projects.",
    },
    {
        key: "webdev",
        name: "Web Developers",
        img: "/assets/about/webDev.jpeg",
        short:
            "Implement front-end and back-end web features to make interactive, accessible and performant websites and web apps.",
        full:
            "Web developers specialize in building websites and web applications that are accessible, performant, and delightful for users. They bridge design and engineering by translating visual mockups into semantic HTML, responsive CSS, and dynamic JavaScript-driven interactions. Front-end developers focus on UX, accessibility and client-side performance, using frameworks and libraries that accelerate development. Back-end or full-stack developers design APIs, databases and server-side logic to store and serve data securely and efficiently. Web developers test for cross-browser compatibility, optimize page load times, and integrate third-party services when necessary. They are problem solvers who continuously monitor user feedback and analytics to refine features. On connectsMe, web developers find collaborators, freelance gigs, and roles in companies seeking people who can ship on both user experience and technical reliability.",
    },
    {
        key: "webdesign",
        name: "Web Designers",
        img: "/assets/about/webDesign.jpeg",
        short:
            "Craft visual language, interaction patterns, and layouts that make digital experiences intuitive, beautiful and usable.",
        full:
            "Web designers craft the look and feel of websites and digital products — focusing on typography, visual hierarchy, color, spacing, and interaction design. They translate brand goals into layouts and design systems that scale across pages and breakpoints. Good web designers balance aesthetics with usability: they create clear navigation, sensible information architecture, and interfaces that guide users toward meaningful tasks. They often collaborate closely with front-end developers to ensure designs are feasible and maintainable, and with product teams to align design decisions with user needs. Tools like Figma, Sketch, and design tokens help designers produce consistent systems and components. Web designers on connectsMe can showcase portfolios, find collaborators to implement prototypes, and join communities to learn modern UX patterns that increase conversion and engagement.",
    },
    {
        key: "doctors",
        name: "Doctors",
        img: "/assets/about/doctorsA.jpeg",
        short:
            "Medical doctors provide diagnosis, treatment and leadership in clinical settings, research, and community health programs.",
        full:
            "Doctors are highly trained medical professionals who diagnose, treat, and guide patient care across a wide variety of clinical settings. Their work spans outpatient clinics, hospitals, surgical suites, and research institutions. Beyond clinical diagnosis and treatment, doctors lead care teams, mentor students and residents, and help design care pathways that improve outcomes. Many doctors also participate in research to discover new therapies and translate evidence into practice. Effective physicians communicate complex medical information compassionately to patients, coordinate multidisciplinary care, and stay current with evolving medical guidelines and technology. connectsMe connects doctors with specialist colleagues, research collaborators, telemedicine opportunities, and global health projects — enabling physicians to share knowledge, find jobs, and scale their impact in community health.",
    },
    {
        key: "nurses",
        name: "Nurses",
        img: "/assets/about/NurseA.jpeg",
        short:
            "Nurses deliver patient care, coordinate multidisciplinary teams, and are often the primary touchpoint for clinical support.",
        full:
            "Nurses are essential caregivers who provide continuous patient support, perform clinical assessments, administer treatments, and coordinate care across disciplines. They play a central role in hospitals, clinics, community health, and home care settings. Nursing requires clinical skill, emotional intelligence, and the ability to triage and prioritize under pressure. Nurses educate patients and families about disease management, recovery plans, and preventive care. They also act as critical communicators between physicians, therapists, and social services, ensuring that care plans are implemented safely and effectively. Advanced practice nurses and nurse leaders take on roles in management, policy, and specialized clinical practice. On connectsMe, nurses find peer networks, training opportunities, mentorship, and job listings that match their specializations and career goals.",
    },
    {
        key: "dentists",
        name: "Dentists",
        img: "/assets/about/DentistA.webp",
        short:
            "Dentists diagnose and treat oral diseases, perform procedures and educate patients on oral health and preventive care.",
        full:
            "Dentists are oral health experts who diagnose, treat, and manage diseases of the teeth, gums, and other structures of the oral cavity. Their work includes preventive care, restorative procedures, orthodontic treatments, root canals, and surgical interventions. Dentists emphasize patient education — teaching proper oral hygiene, preventive measures, and the relationship between oral and systemic health. Many dentists run private practices requiring business acumen: scheduling, billing, insurance navigation and patient communications. Specialized dentists, such as periodontists, endodontists, and oral surgeons, perform advanced procedures and collaborate closely with general dentists and medical professionals. connectsMe helps dentists showcase expertise, find continuing education, recruit clinical staff, or join professional networks that support referrals and clinical best practices.",
    },
    {
        key: "electricians",
        name: "Electricians",
        img: "/assets/about/electrician.jpg",
        short:
            "Electricians install, maintain and troubleshoot electrical systems for homes, businesses, and industrial sites.",
        full:
            "Electricians are skilled tradespeople who install, maintain, and repair electrical wiring, equipment, and fixtures in residential, commercial and industrial settings. Their work ensures that power systems are safe, code-compliant, and efficient. Electricians read blueprints, inspect electrical components, replace faulty wiring, and install lighting, outlets, and control systems. Many specialize in areas such as high-voltage systems, renewable energy installations, or automated building controls. Besides technical knowledge, electricians prioritize safety protocols and regulatory compliance to protect people and property. connectsMe helps electricians find local contracting work, apprenticeships, industry training, and a community where tradespeople share best practices and supplier recommendations.",
    },
    {
        key: "journalists",
        name: "Journalists",
        img: "/assets/about/journalA.jpeg",
        short:
            "Journalists report news, investigate stories, and craft narratives that inform the public and support civic life.",
        full:
            "Journalists investigate, verify, and report facts to inform the public and hold institutions accountable. Working across print, broadcast, and digital media, journalists gather sources, research context, and synthesize complex information into clear, accurate stories. They adapt storytelling techniques to different mediums — long-form analysis, feature writing, quick breaking news updates, or data-driven investigations. Ethical standards, fact-checking, and source protection are central to trustworthy journalism. Freelance journalists often collaborate with editors, designers, and multimedia producers to deliver engaging content. connectsMe connects reporters and editors with story leads, peer networks, and editorial opportunities, while also helping journalists find collaborations that expand reach and investigative capacity.",
    },
    {
        key: "presenters",
        name: "Radio Presenters",
        img: "/assets/about/presenterA.jpg",
        short:
            "Radio presenters inform and entertain audiences through live shows, interviews and curated music or talk segments.",
        full:
            "Radio presenters host live shows, interviews, and curated programming that inform, entertain, and build audience communities. They select music, craft thoughtful interviews with guests, and moderate conversations with clarity and charisma. Presenters must be skilled communicators — quick thinkers who can engage callers, coordinate co-hosts, and adapt to changing live formats. Many presenters also create podcast formats, produce audio content for on-demand platforms, and collaborate with producers to develop audience strategies. Technical knowledge of audio equipment and broadcast systems helps presenters maintain show quality. connectsMe supports presenters with networking, guest discovery, show collaborations, and monetization opportunities that turn passionate broadcasting into sustainable careers.",
    },
    {
        key: "researchers",
        name: "Scientific Researchers",
        img: "/assets/about/researcherA.webp",
        short:
            "Researchers design experiments, produce evidence, and translate findings into new knowledge across disciplines.",
        full:
            "Scientific researchers develop hypotheses, design studies, and analyze data to expand knowledge in fields such as biology, engineering, social sciences, and more. They write grant proposals, lead lab or field teams, and publish findings in peer-reviewed journals. Researchers balance technical rigor with creativity — designing experiments and selecting methodologies that yield reproducible results. Collaboration is foundational: researchers work with interdisciplinary teams, share datasets, and contribute to scientific communities through conferences and open repositories. connectsMe enables researchers to find collaborators, advertise lab positions, recruit students, and connect with industry partners who translate discoveries into products and services. The platform helps researchers broaden impact and secure the networks needed for ambitious, cross-disciplinary projects.",
    },
    {
        key: "teachers",
        name: "Teachers",
        img: "/assets/about/TeacherA.jpeg",
        short:
            "Teachers design learning experiences that help learners gain knowledge, skills, and confidence for real-world success.",
        full:
            "Teachers design curricula, lead classrooms, and create learning environments that support cognitive and social development. They assess learning needs, adapt instruction to diverse learners, and use formative feedback to improve outcomes. Beyond knowledge transfer, teachers act as mentors who nurture curiosity, critical thinking, and lifelong learning habits. They collaborate with families and communities to ensure that learners receive consistent support. Teachers also adopt digital tools and pedagogical strategies to make instruction more engaging and accessible. connectsMe helps educators share lesson plans, find tutoring opportunities, discover professional development courses, and connect with peers for cross-school projects and research on effective practices.",
    },
    {
        key: "graphic",
        name: "Graphic Designers",
        img: "/assets/about/graphicDesignerA.jpg",
        short:
            "Graphic designers craft visual systems that communicate ideas, guide attention, and strengthen brand identity.",
        full:
            "Graphic designers create visual identities, marketing materials, and product assets that communicate messages clearly and memorably. They combine typography, color, imagery, and layout to produce logos, packaging, social media content, and user interface components. Good designers understand brand strategy and user psychology; they design for legibility, accessibility, and visual hierarchy across print and digital mediums. Collaboration with copywriters, marketers, and developers helps translate design into functional experiences. connectsMe provides graphic designers with portfolio visibility, project leads, and collaboration opportunities with developers and content creators — enabling designers to grow client relationships and refine their craft.",
    },
];

const CommunitiesShowcase: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Community | null>(null);

    const handleOpen = (c: Community) => {
        setActive(c);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setActive(null);
    };

    return (
        <section className="about-section landing-root" aria-label="Communities showcase">
            <div className="communities-kicker">Communities We Empower</div>
            <Typography variant="h5" className="section-title">
                A Home for Every Professional
            </Typography>
            <Typography className="muted">
                connectsMe supports diverse communities — bringing experts, creators and workers together.
            </Typography>

            <div className="communities-grid">
                {communities.map((c) => (
                    <div key={c.key} className="community-card">
                        <div className="community-image">
                            <img src={c.img} alt={c.name} loading="lazy" />
                        </div>

                        <Typography variant="subtitle1" className="community-name">
                            {c.name}
                        </Typography>

                        <Typography className="community-short muted" variant="body2" sx={{ mb: 1 }}>
                            {c.short}
                        </Typography>

                        <div className="community-actions">
                            <Button
                                variant="contained"
                                className="primary-cta"
                                size="small"
                                sx={{ borderRadius: "999px" }}
                                onClick={() => window.location.href = "/signup"}
                            >
                                Join {c.name}
                            </Button>

                            <Button
                                variant="outlined"
                                className="secondary-cta"
                                size="small"
                                sx={{ borderRadius: "999px" }}
                                onClick={() => handleOpen(c)}
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal / Dialog for full description */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" scroll="paper">
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    {active?.name}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                        <Box sx={{ minWidth: { sm: 240 }, maxWidth: 320 }}>
                            {active && (
                                <img
                                    src={active.img}
                                    alt={active.name}
                                    style={{ width: "100%", height: "auto", borderRadius: 8, objectFit: "cover" }}
                                />
                            )}
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
                                {active?.full}
                            </Typography>
                        </Box>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ flexWrap: "wrap", gap: 1 }}>
                    <Button variant="outlined" sx={{ borderRadius: "999px" }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: "999px" }} onClick={() => window.location.href = "/signup"}>
                        Join {active?.name}
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default CommunitiesShowcase;







