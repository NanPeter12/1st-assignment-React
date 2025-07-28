import React from "react";
import avataaars from "../../assets/images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="home d-flex justify-content-center align-items-center flex-column text-white">
          <div className="home-img mb-5">
            <img src={avataaars} alt="Avatar" className="w-100" />
          </div>

          <h1 className="heading-content mb-3">START FRAMEWORK</h1>
          <div className="heading-decorator">
            <span className="line"></span>
            <span className="star">
              <i className="fa-solid fa-star text-white"></i>
            </span>
            <span className="line"></span>
          </div>

          <p className="mt-3">Graphic Artist - Web Designer - Illustrator </p>
        </div>
      </div>
    </>
  );
}
