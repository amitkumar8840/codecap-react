import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Insights from "./Insights.jsx";
import Podcast from "./Podcast.jsx";
import Portfolio from "./Portfolio.jsx";
import Products from "./Products.jsx";
import Services from "./Services.jsx";
import Team from "./Team.jsx";
import VentureStudio from "./VentureStudio.jsx";

const path = window.location.pathname.toLowerCase();

let Page = App;

if (path === "/insights") {
  Page = Insights;
} else if (path === "/podcast") {
  Page = Podcast;
} else if (path === "/portfolio") {
  Page = Portfolio;
} else if (path === "/products") {
  Page = Products;
} else if (path === "/services") {
  Page = Services;
} else if (path === "/team") {
  Page = Team;
} else if (path === "/venture-studio") {
  Page = VentureStudio;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);