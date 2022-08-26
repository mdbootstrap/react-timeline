import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import Events from "./Events/Events";
import Double from "./Double/Double";
import Events2 from "./Events2/Events2";
import Horizontal from "./Horizontal/Horizontal";
import Images from "./Images/Images";
import News from "./News/News";
import Cards from "./Cards/Cards";
import Gradient from "./Gradient/Gradient";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Double" element={<Double />} />
        <Route path="/Events2" element={<Events2 />} />
        <Route path="/Horizontal" element={<Horizontal />} />
        <Route path="/Images" element={<Images />} />
        <Route path="/News" element={<News />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Gradient" element={<Gradient />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
