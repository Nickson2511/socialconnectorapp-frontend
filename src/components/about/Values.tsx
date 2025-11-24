import React from "react";
import { Typography, Box } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import BoltIcon from "@mui/icons-material/Bolt";

const values = [
    { icon: <VerifiedUserIcon />, title: "Trusted Profiles", text: "Profiles backed by signals and optional verification." },
    { icon: <PeopleIcon />, title: "Community First", text: "Communities built to help people collaborate & learn." },
    { icon: <BoltIcon />, title: "Fast Discovery", text: "Smart matching that surfaces opportunities fast." },
];

const Values: React.FC = () => {
    return (
        <section className="about-section landing-root">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div>
                    <div className="kicker">Our values</div>
                    <Typography variant="h5">Built on trust, not attention</Typography>
                </div>
            </div>

            <div className="values-grid" style={{ marginTop: 16 }}>
                {values.map((v, i) => (
                    <div className="value-card" key={i}>
                        <Box className="value-icon">{v.icon}</Box>
                        <div>
                            <Typography variant="subtitle1">{v.title}</Typography>
                            <Typography className="muted" variant="body2" sx={{ mt: 0.5 }}>{v.text}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Values;
