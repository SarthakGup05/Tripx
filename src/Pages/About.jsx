import React from "react";
import TravelGuides from "../components/TravelGuides";
import BreadcrumbSection from "../components/BreadcrumpSec";

const About = () => {
  return (
    <>
      <BreadcrumbSection
        title="About"
        backgroundImage="/assets/img/bg/cta-bg.png"
        icon1="assets/img/icons/cloud.png"
        icon2="assets/img/icons/map.png"
        path={[{ name: "Home", url: "/" }, { name: "About" }]}
      />
      <section className="vs-about position-relative space">
        <img
          src="assets/img/icons/plain-globe.png"
          alt="plain-globe"
          className="about-icon-1 animate-parachute"
        />
        <img
          src="assets/img/icons/map.png"
          alt="plain-globe"
          className="about-icon-2 animate-parachute"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-auto mx-auto">
              <div className="title-area text-center">
                <span
                  className="sec-subtitle text-capitalize fade-anim"
                  data-direction="top"
                >
                  about tripik
                </span>
                <h2 className="sec-title fade-anim" data-direction="bottom">
                  Discover Organized Adventures <br />
                  Ultimate Travel Hack
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-md-6 order-1 order-md-0">
              <div className="about-info-area">
                <div className="title-area">
                  <span className="sec-subtitle text-capitalize">
                    Explore our trip
                  </span>
                  <h2 className="sec-title">Discover luxury tour thailand</h2>
                </div>
                <div className="about-info">
                  <p>
                    Blienum nhaedrum torquatos nec eul, vis detraxit periculis
                    exnihil is in mei. Xei an periculau ripidis, fincarte
                    Dlienum phaed is tours hack mdei Lei hincartem eiest.
                  </p>
                  <div className="services-lists">
                    <ul className="custom-ul">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                        >
                          <path
                            d="M7.99949 15.7247C7.94644 15.7247 7.89396 15.7137 7.84536 15.6924C7.79675 15.6712 7.75308 15.6401 7.71707 15.6011L0.102184 7.36399C0.0514209 7.30907 0.0177684 7.24055 0.00534479 7.16681C-0.0070788 7.09306 0.00226539 7.0173 0.0322339 6.94878C0.0622023 6.88026 0.111495 6.82197 0.174079 6.78104C0.236663 6.7401 0.309824 6.7183 0.384607 6.71829H4.04999C4.10502 6.7183 4.15942 6.73011 4.2095 6.75293C4.25958 6.77575 4.30418 6.80904 4.3403 6.85056L6.88522 9.77841C7.16026 9.19049 7.69268 8.21156 8.62699 7.01872C10.0082 5.25526 12.5774 2.66176 16.9729 0.320525C17.0579 0.275283 17.1567 0.263542 17.2499 0.287618C17.3431 0.311694 17.4239 0.369838 17.4763 0.450569C17.5287 0.531301 17.5489 0.62875 17.533 0.723675C17.5171 0.8186 17.4661 0.904101 17.3902 0.963294C17.3735 0.97641 15.6787 2.31103 13.7282 4.7556C11.9331 7.00522 9.54691 10.6837 8.37272 15.4325C8.3521 15.516 8.30412 15.5901 8.23645 15.6431C8.16878 15.696 8.08532 15.7248 7.99938 15.7248L7.99949 15.7247Z"
                            fill="currentColor"
                          />
                        </svg>
                        Vietnam include visits
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                        >
                          <path
                            d="M7.99949 15.7247C7.94644 15.7247 7.89396 15.7137 7.84536 15.6924C7.79675 15.6712 7.75308 15.6401 7.71707 15.6011L0.102184 7.36399C0.0514209 7.30907 0.0177684 7.24055 0.00534479 7.16681C-0.0070788 7.09306 0.00226539 7.0173 0.0322339 6.94878C0.0622023 6.88026 0.111495 6.82197 0.174079 6.78104C0.236663 6.7401 0.309824 6.7183 0.384607 6.71829H4.04999C4.10502 6.7183 4.15942 6.73011 4.2095 6.75293C4.25958 6.77575 4.30418 6.80904 4.3403 6.85056L6.88522 9.77841C7.16026 9.19049 7.69268 8.21156 8.62699 7.01872C10.0082 5.25526 12.5774 2.66176 16.9729 0.320525C17.0579 0.275283 17.1567 0.263542 17.2499 0.287618C17.3431 0.311694 17.4239 0.369838 17.4763 0.450569C17.5287 0.531301 17.5489 0.62875 17.533 0.723675C17.5171 0.8186 17.4661 0.904101 17.3902 0.963294C17.3735 0.97641 15.6787 2.31103 13.7282 4.7556C11.9331 7.00522 9.54691 10.6837 8.37272 15.4325C8.3521 15.516 8.30412 15.5901 8.23645 15.6431C8.16878 15.696 8.08532 15.7248 7.99938 15.7248L7.99949 15.7247Z"
                            fill="currentColor"
                          />
                        </svg>
                        Discover Ultimate Travel Hack
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 18 16"
                          fill="none"
                        >
                          <path
                            d="M7.99949 15.7247C7.94644 15.7247 7.89396 15.7137 7.84536 15.6924C7.79675 15.6712 7.75308 15.6401 7.71707 15.6011L0.102184 7.36399C0.0514209 7.30907 0.0177684 7.24055 0.00534479 7.16681C-0.0070788 7.09306 0.00226539 7.0173 0.0322339 6.94878C0.0622023 6.88026 0.111495 6.82197 0.174079 6.78104C0.236663 6.7401 0.309824 6.7183 0.384607 6.71829H4.04999C4.10502 6.7183 4.15942 6.73011 4.2095 6.75293C4.25958 6.77575 4.30418 6.80904 4.3403 6.85056L6.88522 9.77841C7.16026 9.19049 7.69268 8.21156 8.62699 7.01872C10.0082 5.25526 12.5774 2.66176 16.9729 0.320525C17.0579 0.275283 17.1567 0.263542 17.2499 0.287618C17.3431 0.311694 17.4239 0.369838 17.4763 0.450569C17.5287 0.531301 17.5489 0.62875 17.533 0.723675C17.5171 0.8186 17.4661 0.904101 17.3902 0.963294C17.3735 0.97641 15.6787 2.31103 13.7282 4.7556C11.9331 7.00522 9.54691 10.6837 8.37272 15.4325C8.3521 15.516 8.30412 15.5901 8.23645 15.6431C8.16878 15.696 8.08532 15.7248 7.99938 15.7248L7.99949 15.7247Z"
                            fill="currentColor"
                          />
                        </svg>
                        secure and flexible payment options
                      </li>
                    </ul>
                  </div>
                  <div className="btn-trigger btn-bounce">
                    <a
                      href="trips.html"
                      className="vs-btn style6 text-capitalize"
                    >
                      view all service
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-0 order-md-1">
              <div className="about-thumb fade-anim" data-direction="right">
                <img
                  src="assets/img/about/about-thumb.png"
                  alt="about-thumb"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TravelGuides />
    </>
  );
};

export default About;
