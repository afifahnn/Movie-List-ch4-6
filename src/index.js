import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { App } from "./pages/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { RouterAllMovie } from "./routes/RouterAllMovie";
import { BrowserRouter as Router } from "react-router-dom";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <Router>
        <App />
        {/* <RouterAllMovie /> */}
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
