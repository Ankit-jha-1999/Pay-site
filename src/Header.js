import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start
           ">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ET,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                ></input>
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/* main header right-side */}
            <div
              className="col-12 col-lg-6 header-right-side d-flex
             justify-content-center align-items-center main-herosection-images"
            >
              <img
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBheW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="heroimg"
                className="img-fluid"
              ></img>
              <img
                src="https://images.unsplash.com/photo-1587906697341-bfbde76785c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="heroimg"
                className="img-fluid main-hero-img2"
              ></img>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
