import React from "react";
import MainLayout from "./layouts/MainLayout";
import Feed from "./features/posts/Feed";

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  return (
    <MainLayout  toggleTheme={toggleTheme}>
      <Feed />
    </MainLayout>
  );
};

export default App;
