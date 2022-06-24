import React from "react";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks/>
      <Aboutus/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
