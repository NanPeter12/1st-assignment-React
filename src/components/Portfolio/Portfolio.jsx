import React from "react";
import { useState } from "react";

import port1 from "../../assets/images/port1.png"; // احتمال يكون فيه خطأ في اسم الملف (poert1؟)
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

// Adjust the path as necessary
const images = [port1, port2, port3, port1, port2, port3];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="container portfolio-container">
        <div className="portfolio ">
          <h1 className="text-center mt-4">PORTFOLIO COMPONENT</h1>
          <div className="heading-decorator_2 text-center">
            <span className="line"></span>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="line"></span>
          </div>

          {/* <div className="row g-5 p-4">
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="portfolio-img">
                <img
                  onClick={() => {
                    setSelectedImage(port1);
                  }}
                  src={port1}
                  alt="Portfolio 1"
                  className="img-fluid w-100 rounded-3 "
                />
                <div className="overlay rounded-3">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="portfolio-img">
                <img
                  src={port2}
                  alt="Portfolio 1"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="overlay rounded-3">
                  <i className="fa-solid fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="portfolio-img">
                <img
                  src={port3}
                  alt="Portfolio 2"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="overlay rounded-3">
                  <i className="fa-solid fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="portfolio-img">
                <img
                  src={port1}
                  alt="Portfolio 3"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="overlay rounded-3">
                  <i className="fa-solid fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="portfolio-img">
                <img
                  src={port2}
                  alt="Portfolio 4"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="overlay rounded-3">
                  <i className="fa-solid fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="portfolio-img">
                <img
                  src={port3}
                  alt="Portfolio 5"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="overlay rounded-3">
                  <i className="fa-solid fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
          </div>  */}

          {/* <div className="row g-5 mb-5 mb-sm-0">
            {images.map((img, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="portfolio-img">
                    <img
                      onClick={() => {
                        setSelectedImage(img);
                        console.log("Selected:", img);
                      }}
                      src={img}
                      alt={`Portfolio ${index}`}
                      className="img-fluid w-100 rounded-3"
                    />
                    <div className="overlay rounded-3">
                      <i className="fa-solid fa-plus fa-2x"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}

          <div className="row g-5 mb-5  mb-sm-0">
            {images.map((img, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 " key={index}>
                  <div
                    className="portfolio-img"
                    onClick={() => {
                      setSelectedImage(img);
                      console.log("Selected:", img);
                    }}
                  >
                    <img src={img} className="img-fluid w-100 rounded-3 " />
                    <div className="overlay rounded-3">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
     
          {/* 
          {selectedImage ? ( <div className="ondisplay mx-auto" onClick={() => {
                return setSelectedImage(null);ab
              }} >
              <img src={selectedImage} alt="Selected" className="rounded-3 " />
            </div>
          ) : null} */}

          {selectedImage ? (
            <div
              className="ondisplay mx-auto"
              onClick={() => {
                return setSelectedImage(null);
              }}
            >
              <img src={selectedImage} alt="Selected" className="rounded-3 " />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
