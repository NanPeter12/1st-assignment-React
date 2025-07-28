import React from "react";

export default function About() {
  return (
    <>
      <div className=" p-0">
        <div className="d-flex justify-content-center align-items-center flex-column text-white about p-5">
          <h1 className="text-center">ABOUT COMPONENT</h1>
          <div className="heading-decorator">
            <span className="line"></span>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="line"></span>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 ">
              <div className="about_content p-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="about_content_2 p-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
