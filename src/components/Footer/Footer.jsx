import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className=" row footer ">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="left text-center p-5">
              <h3>LOCATION</h3>
              <h6>2215 John Daniel Drive</h6>
              <h6>Clark, MO 65243</h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="Middle text-center p-5">
              <h3>AROUND THE WEB</h3>
              <div className="icons text-center">
                <i className="fab fa-facebook-f fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="right text-center p-5">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" copyright p-4 ">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
