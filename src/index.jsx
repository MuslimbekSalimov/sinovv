import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as LocalizationProvider } from "./Context/Localization";
import { Provider as ThemeProvider } from "./Context/Theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
      </ThemeProvider>
  </React.StrictMode>
);
