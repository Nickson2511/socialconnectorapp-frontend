import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

interface HeaderProps {
    toggleTheme: () => void;
    currentMode: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentMode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    return (
        <header className="landing-root">
            <nav className="navbar">
                {/* Logo */}
                <div className="navbar-left">
                    <Link to="/" className="logo">
                        connectsMe
                    </Link>
                </div>

                {/* Desktop links */}
                <ul className="navbar-links">
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#stories">Stories</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                {/* Desktop actions */}
                <div className="navbar-actions">
                    <IconButton
                        aria-label="toggle theme"
                        onClick={toggleTheme}
                        sx={{ mr: 1 }}
                    >
                        {currentMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                    <Button variant="text">Login</Button>
                    <Button variant="contained">Join Now</Button>
                </div>

                {/* Mobile menu toggle */}
                <IconButton
                    className="navbar-menu"
                    aria-label="toggle mobile menu"
                    onClick={toggleMobileMenu}
                >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </nav>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    <a href="#features" onClick={toggleMobileMenu}>
                        Features
                    </a>
                    <a href="#stories" onClick={toggleMobileMenu}>
                        Stories
                    </a>
                    <a href="#pricing" onClick={toggleMobileMenu}>
                        Pricing
                    </a>
                    <Link to="/about" onClick={toggleMobileMenu}>
                        About
                    </Link>

                    <IconButton
                        aria-label="toggle theme"
                        onClick={toggleTheme}
                        sx={{ mt: 1 }}
                    >
                        {currentMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>

                    <Button
                        fullWidth
                        variant="text"
                        sx={{ mt: 2 }}
                        onClick={toggleMobileMenu}
                    >
                        Login
                    </Button>

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1 }}
                        onClick={toggleMobileMenu}
                    >
                        Join Now
                    </Button>
                </div>
            )}
        </header>
    );
};

export default Header;






