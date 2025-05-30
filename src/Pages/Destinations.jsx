import React from "react";
import BreadcrumbSection from "../components/BreadcrumpSec";

const Destinations = () => {
  return (
    <>
      <BreadcrumbSection
        title="Destinations"
        backgroundImage="assets/img/bg/breadcrumb-bg-2.png"
        icon1="assets/img/icons/cloud.png"
        icon2="assets/img/icons/ballon-sclation.png"
        path={[{ name: "Home", url: "/" }, { name: "Destinations" }]}
      />
      <section className="vs-destination space">
        <div className="container">
          <div className="row gx-3 gy-3">
            <div className="col-md-6 col-lg-6">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-1.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">manila city</a>
                  </h5>
                  <span className="info">30 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-2.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">turkey</a>
                  </h5>
                  <span className="info">10 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-3.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">Los Angeles</a>
                  </h5>
                  <span className="info">14 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-4.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">vietnam</a>
                  </h5>
                  <span className="info">10 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-5.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">china tours</a>
                  </h5>
                  <span className="info">30 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-6.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">germany</a>
                  </h5>
                  <span className="info">10 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-7.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">Turkey</a>
                  </h5>
                  <span className="info">3 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-8.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">cairo tour</a>
                  </h5>
                  <span className="info">10 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-9.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">span tour</a>
                  </h5>
                  <span className="info">10 Place</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="destination-box-2">
                <figure className="destination-thumb">
                  <img
                    src="assets/img/destination/destinations-thumb-2-10.png"
                    alt="destination"
                    className="w-100"
                  />
                </figure>
                <div className="destination-content">
                  <h5 className="title">
                    <a href="destination-details.html">netherlands</a>
                  </h5>
                  <span className="info">10 Place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
