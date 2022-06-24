import React, { useState } from "react";
import howToUseApp from "./API/Howtouse";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img
                src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBheW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="aboutusImg"
              ></img>
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <div className="row our-services-info">
                    <div className="col-1 our-services-number">{id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                --SUPPORT IN ANY LANGUAGES
              </h3>
              <h1 className="main-heading">World class support is<br/> available 24/7</h1>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <div className="row our-services-info">
                    <div className="col-1 our-services-number">{id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                );
              })}
              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
            <div className="col-12 col-lg-5 our-service-rightside-img">
              <img
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsbGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="aboutusImg"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
