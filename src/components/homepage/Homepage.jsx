import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../air/css/animate.css";
import "../../air/css/bootstrap.css";
import "../../air/css/bootstrap.css.map";
import "../../air/css/flexslider.css";
import "../../air/css/icomoon.css";
import "../../air/css/magnific-popup.css";
import "../../air/css/style.css";
import "../../air/css/style.css.map";

function Homepage() {
  return (
    <div>
      {/* <p>WELCOME PAGE for the Project</p>
      <button> <a href="/instructions"> Go to next page aka Instruction Page</a></button> */}

      {/* <div className="fh5co-loader" /> */}

      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-xs-2">
                  <div id="fh5co-logo">
                    AIR<span>.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{
            background: "#FEE856",
            padding: "15% 0 15% 0",
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <h1>Welcome to the Test &amp; Human-AI Decision Making</h1>
                    <p>
                      <NavLink
                        className="btn btn-primary btn-lg btn-demo"
                        to="/instructions"
                        variant="body2"
                      >
                        Take me to instruction page
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div id="fh5co-started">
      <div className="overlay" />
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Hire Us!</h2>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
            </p>
            <p>
              <a href="#" className="btn btn-default btn-lg">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}

export default Homepage;
