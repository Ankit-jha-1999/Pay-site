import React from "react";

import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Service";
import Error from "./Pages/Error";
import Contacts from "./Pages/Contacts";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contacts/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route  path="*" element={<Error/>}></Route>
      </Routes>
      </Router>
    </>
  );
};

export default App;
