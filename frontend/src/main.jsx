import React from "react";
import { createRoot } from "react-dom/client";
import {startKeepAlive} from "./utils/keepAlive";

startKeepAlive();
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);