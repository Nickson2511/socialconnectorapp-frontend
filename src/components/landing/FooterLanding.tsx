import React from "react";
import { Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";

const FooterLanding: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Column 1 – Brand + Vision */}
                <div className="footer-col">
                    <Typography variant="h5" className="footer-logo">
                        connectsMe
                    </Typography>
                    <Typography variant="body2" className="footer-text">
                        The modern hub for professionals, creators, travelers, and students.
                        connectsMe helps you build meaningful connections, collaborate on
                        projects, explore opportunities, and grow your digital footprint
                        across the world.
                    </Typography>

                    <div className="footer-socials">
                        <IconButton aria-label="facebook" className="footer-icon">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="x" className="footer-icon">
                            <XIcon />
                        </IconButton>
                        <IconButton aria-label="linkedin" className="footer-icon">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="github" className="footer-icon">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="youtube" className="footer-icon">
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton aria-label="website" className="footer-icon">
                            <PublicIcon />
                        </IconButton>
                    </div>
                </div>

                {/* Column 2 – App Navigation */}
                <div className="footer-col">
                    <Typography variant="subtitle1" className="footer-heading">
                        Platform
                    </Typography>
                    <Link href="#" className="footer-link">Features</Link>
                    <Link href="#" className="footer-link">Communities</Link>
                    <Link href="#" className="footer-link">Jobs & Careers</Link>
                    <Link href="#" className="footer-link">Professional Network</Link>
                    <Link href="#" className="footer-link">Migration & Settlement</Link>
                    <Link href="#" className="footer-link">Mobile App (Soon)</Link>
                </div>

                {/* Column 3 – Company */}
                <div className="footer-col">
                    <Typography variant="subtitle1" className="footer-heading">
                        Company
                    </Typography>
                    <Link href="#" className="footer-link">About Us</Link>
                    <Link href="#" className="footer-link">Our Mission</Link>
                    <Link href="#" className="footer-link">Press & Media</Link>
                    <Link href="#" className="footer-link">Partnerships</Link>
                    <Link href="#" className="footer-link">Careers (Upcoming)</Link>
                </div>

                {/* Column 4 – Legal + Support */}
                <div className="footer-col">
                    <Typography variant="subtitle1" className="footer-heading">
                        Resources
                    </Typography>
                    <Link href="#" className="footer-link">Documentation</Link>
                    <Link href="#" className="footer-link">API Developers</Link>
                    <Link href="#" className="footer-link">Support Center</Link>
                    <Link href="#" className="footer-link">Contact</Link>
                    <Link href="#" className="footer-link">Privacy Policy</Link>
                    <Link href="#" className="footer-link">Terms of Use</Link>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="footer-bottom">
                <Typography variant="body2" className="footer-copy">
                    © {year} connectsMe — All rights reserved.
                </Typography>
                <Typography variant="body2" className="footer-country">
                    Made with ❤️ connectsMe Team
                </Typography>
            </div>
        </footer>
    );
};

export default FooterLanding;




