import React from 'react'

const TopDestinationsSec = () => {
  return (
  <><section
  className="vs-destination-style1 bg-third-theme-12 overflow-hidden space"
  data-bg-src="assets/img/bg/destination.png"
>
  <img
    className="des-icon-1 animate-parachute"
    src="assets/img/icons/destination-icon-1.png"
    alt="icon"
  />
  <img
    className="des-icon-2 animate-tree"
    src="assets/img/icons/destination-icon-2.png"
    alt="icon"
  />
  <div className="container">
    <div className="row">
      <div className="col-lg-auto mx-auto">
        <div className="title-area text-center">
          <span className="sec-subtitle fade-anim" data-direction="top">
            Top Destinations
          </span>
          <h2 className="sec-title move-anim">Discover Top Destinations</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="destination-box-wrapper">
          <div className="destination-box active">
            <div className="destination-thumb">
              <img
                src="./assets/img/destination/destination-1-1.png"
                alt="destination"
                className="w-100"
              />
            </div>
            <div className="destination-content">
              <div className="info">
                <h4 className="text-white text-capitalize">
                  <a href="destination-details.html">thailand trip</a>
                </h4>
                <span className="text-theme-color d-block">30% discount</span>
              </div>
              <a href="#" className="icon bg-theme-color text-white-color">
                <i className="fa-solid fa-location-dot" />
              </a>
            </div>
          </div>
          <div className="destination-box">
            <div className="destination-thumb">
              <img
                src="./assets/img/destination/destination-1-2.png"
                alt="destination"
                className="w-100"
              />
            </div>
            <div className="destination-content">
              <div className="info">
                <h4 className="text-white text-capitalize">
                  <a href="destination-details.html">tokyo</a>
                </h4>
                <span className="text-theme-color d-block">30% discount</span>
              </div>
              <a href="#" className="icon bg-theme-color text-white-color">
                <i className="fa-solid fa-location-dot" />
              </a>
            </div>
          </div>
          <div className="destination-box">
            <div className="destination-thumb">
              <img
                src="./assets/img/destination/destination-1-3.jpg"
                alt="destination"
                className="w-100"
              />
            </div>
            <div className="destination-content">
              <div className="info">
                <h4 className="text-white text-capitalize">
                  <a href="destination-details.html">spain</a>
                </h4>
                <span className="text-theme-color d-block">30% discount</span>
              </div>
              <a href="#" className="icon bg-theme-color text-white-color">
                <i className="fa-solid fa-location-dot" />
              </a>
            </div>
          </div>
          <div className="destination-box">
            <div className="destination-thumb">
              <img
                src="./assets/img/destination/destination-1-4.jpg"
                alt="destination"
                className="w-100"
              />
            </div>
            <div className="destination-content">
              <div className="info">
                <h4 className="text-white text-capitalize">
                  <a href="destination-details.html">spain</a>
                </h4>
                <span className="text-theme-color d-block">30% discount</span>
              </div>
              <a href="#" className="icon bg-theme-color text-white-color">
                <i className="fa-solid fa-location-dot" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-50 btn-trigger btn-bounce">
          <a href="destinations.html" className="vs-btn style4">
            <span>view more</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default TopDestinationsSec