import React from "react";
import { Typography, Button } from "@mui/material";

interface FeatureProps {
    title: string;
    desc: string;
    cta: string; 
}

const FeatureItem: React.FC<FeatureProps> = ({ title, desc, cta }) => (
    <div className="card">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>

        
        <Button
            variant="contained"
            sx={{
                mt: 2,
                borderRadius: '999px',
                padding: '10px 22px',
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                whiteSpace: 'nowrap',
                width: 'fit-content',
                backgroundColor: '#2563eb',
                transition: 'all .25s ease',
                '&:hover': {
                    backgroundColor: '#1e40af',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                }
            }}
        >
            {cta}
        </Button>
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
                <FeatureItem
                    title="Smart Profiles"
                    desc="Showcase curated projects, articles, and live demos — rich media first. Just in relations to user profiles, you may freely identify your common group, for example if you are a student, you will find easily your fellow students according to field of specializations. Example a student passueing medicine, he/she will be able to connect with his fellow medical professions and linkup, i.e This enhances collaborations in terms of exploring research activities or even design an idea and ensure this idea is up and running according to your specific needs. Many youths outside there luck a platform to link up with their desired professionals hence many of them ending up lonely in terms of solving their issues of studies alone. This restricts knowledge expansion and as well limits the way of communications and interractions!"
                    cta="Build Your Profile"
                />

                <FeatureItem
                    title="Collaboration Spaces"
                    desc="Private project rooms to discuss, track tasks and ship work. This favors mostly Software developers. Whether you are in software engineering, Web Development, Machine Learning, Data Science, Crypto etc. This app gives you a room to expand your community and enhance as well expansion of socialization. You may find easily a community support whether you are stuck in a bug, whether you want a team mate who you feel like you want to collaborate and learn with him in a specif project, whether you want someone to work for you to execute your idea, everything is covered here. You will easily find your desired team mate or work mate or even employee especially if you are a client and you want to employ a developer to execute your idea into existence.  This developers are not guess work developers since they must qualify for them to be allowed in this group."
                    cta="Collaborate Now"
                />

                <FeatureItem
                    title="Discovery Engine"
                    desc="Match with opportunities, mentors and talent using smart filters. This is a nice app that will link you with varieties of  opportunities depending on your profile. We have varieties of opportunities linking with desirable companies, whether startups or even revolutionized companies, will link you with your area of specialization to your loyal employers ensuring you are in safe hands. As well the app provide a room to meet mentors, whether Software Engineering(IT) departments, Medical Departments, Pilots, Caterings, Retailers, Civil Engineers, Carpenters, Radio Presenters, Journalists, Dentists, Farmers of different Categories, Hotel Managers, Security officers, Criminologists, etc ."
                    cta="Explore Opportunities"
                />
            </div>
        </section>
    );
};

export default Features;






