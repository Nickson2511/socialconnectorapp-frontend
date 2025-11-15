import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
//import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react";

interface Props {
    toggleTheme: () => void;
    children?: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ toggleTheme, children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        SocialConnector
                    </Typography>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        <Brightness4Icon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box flex={1} p={2}>
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
