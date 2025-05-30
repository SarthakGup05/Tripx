import React from "react";

const TravelGuides = () => {
  return (
    <>
      <section
        className="travel-guides bg-second-theme-color position-relative space"
        data-bg-src="assets/img/bg/travel-guides-bg.png"
      >
        <img
          src="assets/img/icons/plain-sclation.png"
          alt="icon"
          className="travel-guides-icon-1 animate-parachute"
        />
        <img
          src="assets/img/icons/rops.png"
          alt="icon"
          className="travel-guides-icon-2 animate-parachute"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-auto mx-auto">
              <div className="title-area text-center">
                <span className="sec-subtitle fade-anim" data-direction="top">
                  Meet Our Guides
                </span>
                <h2
                  className="sec-title text-white-color fade-anim"
                  data-direction="bottom"
                >
                  Meet Our Travel Guides
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 col-xl-3 fade-anim"
              data-delay="0.30"
            >
              <div className="guide-box">
                <figure className="guide-thumb">
                  <img
                    src="assets/img/guides/guide-1-1.png"
                    alt="guide"
                    className="w-100"
                  />
                </figure>
                <div className="guide-content text-center">
                  <h5 className="guide-name line-clamp-1 text-second-theme-color text-capitalize">
                    daniella alonso
                  </h5>
                  <p className="guide-designation line-clamp-1 text-theme-color text-capitalize">
                    Travel Guides
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 fade-anim"
              data-delay="0.40"
            >
              <div className="guide-box">
                <figure className="guide-thumb">
                  <img
                    src="assets/img/guides/guide-1-2.png"
                    alt="guide"
                    className="w-100"
                  />
                </figure>
                <div className="guide-content text-center">
                  <h5 className="guide-name line-clamp-1 text-second-theme-color text-capitalize">
                    Alexandra Dadd
                  </h5>
                  <p className="guide-designation line-clamp-1 text-theme-color text-capitalize">
                    Travel Guides
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 fade-anim"
              data-delay="0.50"
            >
              <div className="guide-box">
                <figure className="guide-thumb">
                  <img
                    src="assets/img/guides/guide-1-3.png"
                    alt="guide"
                    className="w-100"
                  />
                </figure>
                <div className="guide-content text-center">
                  <h5 className="guide-name line-clamp-1 text-second-theme-color text-capitalize">
                    erica fernandes
                  </h5>
                  <p className="guide-designation line-clamp-1 text-theme-color text-capitalize">
                    Travel Guides
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 fade-anim"
              data-delay="0.60"
            >
              <div className="guide-box">
                <figure className="guide-thumb">
                  <img
                    src="assets/img/guides/guide-1-4.png"
                    alt="guide"
                    className="w-100"
                  />
                </figure>
                <div className="guide-content text-center">
                  <h5 className="guide-name line-clamp-1 text-second-theme-color text-capitalize">
                    daniel craig
                  </h5>
                  <p className="guide-designation line-clamp-1 text-theme-color text-capitalize">
                    Travel Guides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelGuides;
