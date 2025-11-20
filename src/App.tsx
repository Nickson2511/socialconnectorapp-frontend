import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import MainLayout from "./layouts/MainLayout";
import Feed from "./features/posts/Feed";

interface AppProps {
  toggleTheme: () => void;
  mode: "light" | "dark";

}

const App: React.FC<AppProps> = ({ toggleTheme, mode }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage toggleTheme={toggleTheme} currentMode={mode} />} />
        <Route path="/app" element={<MainLayout toggleTheme={toggleTheme}><Feed /></MainLayout>} />
        {/* add auth routes, signup, login etc , remember we will have both public routes and private routes!*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;