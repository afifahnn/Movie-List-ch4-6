import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { RouterDetail } from "./routes/RouterDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <RouterDetail/>
    </QueryClientProvider>
    
  </React.StrictMode>
);
