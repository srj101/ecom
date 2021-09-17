import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, StyleReset } from "atomize";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
