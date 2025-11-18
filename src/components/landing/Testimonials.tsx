import React from "react";
import { Avatar, Typography } from "@mui/material";

const testimonials = [
    { name: "Aisha K.", text: "connectsMe helped me find my first remote collaborator in 2 days. Thanks to connectMe. Am just a professional web Designer who had a client. Now this client gave me an idea then i was lucking someone to convert my design according to the client idea into a working code. I found an advert about connect me while i was exploring instagram, there i created an account and logged in to the dahsboard. Straight a way i explored the feature that said connect with your profession, then that time i connected with 4 engineers, two of them were frontend engineers and 2 of them were backend engineers. Currently as i speak , we are 90% done with the client idea and as well the client is really happy with our work. He also added that if we finish the app , we will not leave the organization but we will remain as one of his software maintaners, this guaranteed a job unto us. Without connectsMe , maybe i would have been so stranded and i would have never met desirable / committed/ honest team mates who had the same ambitions i have. Thanks to connectsMe!" },
    { name: "David M.", text: "Our small agency sourced 3 contractors using the discovery engine — love it. I am a CEO of a certain startup called GreenLeaf Investments fund, therefore, while i was stranded where to start to employ curated/selfminded/honesty/ambitious Developers who iwanted them to participate heavely in executing this idea into existence. One day i found a link on facebook advertising connectsMe app, there, i clicked the link and i was redirected to this app, there i created an account  and as well i went straight to a certain group that was only meant for developers and designers. I found to web designers and 4 software developers, 2 of them were frontend developers, two of them were backend developers, i was excited since this developers and designers were open minded, they knew exactly what i wanted. They delivered me the app and currently we are in the midst of development, They are even integrating payments to my app . Thanks to connectsME!" }
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
