import React from "react";
import { Typography, Link } from "@mui/material";

const FooterLanding: React.FC = () => (
    <footer className="landing-root" style={{ padding: "2rem 0 4rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div>
                <Typography variant="h6">connectsMe</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>© {new Date().getFullYear()} connectsMe</Typography>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
                <Link href="#" underline="hover">Privacy</Link>
                <Link href="#" underline="hover">Terms</Link>
                <Link href="#" underline="hover">Contact</Link>
            </div>
        </div>
    </footer>
);

export default FooterLanding;
