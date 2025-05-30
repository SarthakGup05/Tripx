import React from "react";
import BreadcrumbSection from "../components/BreadcrumpSec";

const Tour = () => {
  return (
    <>
     <BreadcrumbSection
        title="Tour"
        backgroundImage="assets/img/bg/breadcrumb-bg-2.png"
        icon1="assets/img/icons/cloud.png"
        icon2="assets/img/icons/ballon-sclation.png"
        path={[{ name: "Home", url: "/" }, { name: "Tour" }]}
      />
    <div>

      <section className="vs-tour-package style-2 space">
        <div className="container">
          <div className="row">
            <div className="col-lg-auto mx-auto">
              <div className="title-area text-center">
                <span
                  className="sec-subtitle text-capitalize fade-anim"
                  data-direction="top"
                >
                  Choose Your Package
                </span>
                <h2 className="sec-title fade-anim" data-direction="bottom">
                  Explore Popular package
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-xl-4">
              <div className="tour-package-box style-3 bg-white-color">
                <div className="tour-package-thumb">
                  <img
                    src="assets/img/tour-packages/tour-package-3-1.png"
                    alt="tour-package"
                    className="w-100"
                  />
                </div>
                <div className="tour-package-content">
                  <div className="location">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <span>Thailand, vietnam, Nepal</span>
                  </div>
                  <h5 className="title line-clamp-2">
                    <a href="contact.html">
                      Maldives Travel Experience of the Lifetime
                    </a>
                  </h5>
                  <div className="tour-package-footer">
                    <div className="tour-duration">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                          fill="#556065"
                        />
                        <path
                          d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                          fill="#556065"
                        />
                      </svg>
                      <span>6 - Days</span>
                    </div>
                    <div className="pricing-info fw-medium">
                      From
                      <del className="text-theme-color fw-semibold">$800</del>
                      <h5 className="new-price">$700</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="tour-package-box style-3 bg-white-color">
                <div className="tour-package-thumb">
                  <img
                    src="assets/img/tour-packages/tour-package-3-2.png"
                    alt="tour-package"
                    className="w-100"
                  />
                </div>
                <div className="tour-package-content">
                  <div className="location">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <span>Thailand, vietnam, Nepal</span>
                  </div>
                  <h5 className="title line-clamp-2">
                    <a href="contact.html">
                      barcelona city beach hotels of the Lifetime
                    </a>
                  </h5>
                  <div className="tour-package-footer">
                    <div className="tour-duration">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                          fill="#556065"
                        />
                        <path
                          d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                          fill="#556065"
                        />
                      </svg>
                      <span>3 - Days</span>
                    </div>
                    <div className="pricing-info fw-medium">
                      From
                      <del className="text-theme-color fw-semibold">$800</del>
                      <h5 className="new-price">$400</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="tour-package-box style-3 bg-white-color">
                <div className="tour-package-thumb">
                  <img
                    src="assets/img/tour-packages/tour-package-3-3.png"
                    alt="tour-package"
                    className="w-100"
                  />
                </div>
                <div className="tour-package-content">
                  <div className="location">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <span>Thailand, vietnam, Nepal</span>
                  </div>
                  <h5 className="title line-clamp-2">
                    <a href="contact.html">
                      golden sand and shallow waters Lifetime
                    </a>
                  </h5>
                  <div className="tour-package-footer">
                    <div className="tour-duration">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                          fill="#556065"
                        />
                        <path
                          d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                          fill="#556065"
                        />
                      </svg>
                      <span>6 - Days</span>
                    </div>
                    <div className="pricing-info fw-medium">
                      From
                      <del className="text-theme-color fw-semibold">$800</del>
                      <h5 className="new-price">$8000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="tour-package-box style-3 bg-white-color">
                <div className="tour-package-thumb">
                  <img
                    src="assets/img/tour-packages/tour-package-3-4.png"
                    alt="tour-package"
                    className="w-100"
                  />
                </div>
                <div className="tour-package-content">
                  <div className="location">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <span>Thailand, vietnam, Nepal</span>
                  </div>
                  <h5 className="title line-clamp-2">
                    <a href="contact.html">
                      Totally Morocco Tour from Casablanca
                    </a>
                  </h5>
                  <div className="tour-package-footer">
                    <div className="tour-duration">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                          fill="#556065"
                        />
                        <path
                          d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                          fill="#556065"
                        />
                      </svg>
                      <span>3 - Days</span>
                    </div>
                    <div className="pricing-info fw-medium">
                      From
                      <del className="text-theme-color fw-semibold">$800</del>
                      <h5 className="new-price">$350</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="tour-package-box style-3 bg-white-color">
                <div className="tour-package-thumb">
                  <img
                    src="assets/img/tour-packages/tour-package-3-5.png"
                    alt="tour-package"
                    className="w-100"
                  />
                </div>
                <div className="tour-package-content">
                  <div className="location">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <span>Thailand, vietnam, Nepal</span>
                  </div>
                  <h5 className="title line-clamp-2">
                    <a href="contact.html">
                      Spanish Wonder Barcelona, tour 9 Days
                    </a>
                  </h5>
                  <div className="tour-package-footer">
                    <div className="tour-duration">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                          fill="#556065"
                        />
                        <path
                          d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                          fill="#556065"
                        />
                      </svg>
                      <span>9 - Days</span>
                    </div>
                    <div className="pricing-info fw-medium">
                      From
                      <del className="text-theme-color fw-semibold">$800</del>
                      <h5 className="new-price">$500</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="tour-package-box style-3 bg-white-color">
                <div className="tour-package-thumb">
                  <img
                    src="assets/img/tour-packages/tour-package-3-6.png"
                    alt="tour-package"
                    className="w-100"
                  />
                </div>
                <div className="tour-package-content">
                  <div className="location">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <span>Thailand, vietnam, Nepal</span>
                  </div>
                  <h5 className="title line-clamp-2">
                    <a href="contact.html">
                      Machu Picchu with Vistadome Train 4 days
                    </a>
                  </h5>
                  <div className="tour-package-footer">
                    <div className="tour-duration">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                          fill="#556065"
                        />
                        <path
                          d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                          fill="#556065"
                        />
                      </svg>
                      <span>4 - Days</span>
                    </div>
                    <div className="pricing-info fw-medium">
                      From
                      <del className="text-theme-color fw-semibold">$800</del>
                      <h5 className="new-price">$250</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center space-extra-top btn-trigger btn-bounce">
                <a href="trips.html" className="vs-btn style6 text-capitalize">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>

  );
};

export default Tour;
