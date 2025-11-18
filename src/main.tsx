import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { store } from "./app/store";
import App from "./App";
import { getTheme } from "./theme";



const Root = () => {

  
  const [mode, setMode] = useState<"light" | "dark">("light");
  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />
        <App toggleTheme={toggleTheme} mode={mode} />
      </ThemeProvider>
    </Provider>
  );
};

export default Root;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
