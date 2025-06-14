import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="vs-footer-style1"
        style={{ backgroundImage: "url(./assets/img/footer/footer-style1-bg.png)" }}
      >
        <div className="footer-top space-top">
          <div className="container">
            <div className="row gx-4">
              <div className="col-12">
                <div
                  className="footer-cta bg-third-theme-color fade-anim bg-black"
                  style={{ backgroundImage: "url(./assets/img/footer/footer-cta-bg.png)" }}
                >
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-8">
                      <div className="cta-contact-items">
                        <div className="contact-item">
                          <span className="icon">
                            <i className="fa-light fa-location-dot" />
                          </span>
                          <div className="info">
                            <h5 className="info-title text-white-color">
                              Location
                            </h5>
                            <p>54 Thurston Avenue, Ithaca, NY 10001.</p>
                          </div>
                        </div>
                        <div className="contact-item">
                          <span className="icon">
                            <i className="fa-sharp fa-light fa-phone-rotary" />
                          </span>
                          <div className="info">
                            <h5 className="info-title text-white-color">
                              Contact Us
                            </h5>
                            <p>
                              <a href="mailto:info@example.com">
                                Info@example.com
                              </a>
                              <a href="tel:+123456789">+123456789</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end btn-trigger btn-bounce">
                      <a href="contact.html" className="vs-btn style6">
                        <span>booking now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center space-extra">
          <div className="container">
            <div className="row gx-4 gy-4 gx-xl-2 justify-content-between">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="footer-widgets">
                  <a href="index.html" className="logo">
                    <img src="assets/img/logo.svg" alt="logo" />
                  </a>
                  <div className="social-media">
                    <ul className="custom-ul">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 mb-3 text-color-5">
                    Stay connected for future updates.
                  </p>
                  <div className="newsletter">
                    <form
                      action="https://html.vecurosoft.com/tripix/tripix-demo/index.html"
                      className="w100"
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                      <button
                        type="submit"
                        className="text-uppercase text-color-5"
                      >
                        <i className="fa-solid fa-angles-right" />
                        <span>Subscribe now</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4 order-md-3 order-lg-2">
                <div className="footer-widgets">
                  <h5 className="widgets-title text-white-color text-capitalize">
                    Useful Links
                  </h5>
                  <div className="row gx-xl-2 g-2">
                    <div className="col-md-6">
                      <div className="footer-links">
                        <ul className="custom-ul">
                          <li>
                            <a href="contact.html">
                              <i className="fa-solid fa-angles-right" />
                              Help center
                            </a>
                          </li>
                          <li>
                            <a href="about.html">
                              <i className="fa-solid fa-angles-right" />
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              <i className="fa-solid fa-angles-right" />
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              <i className="fa-solid fa-angles-right" />
                              Become A Guide
                            </a>
                          </li>
                          <li>
                            <a href="blog.html">
                              <i className="fa-solid fa-angles-right" />
                              Bloag
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="footer-links">
                        <ul className="custom-ul">
                          <li>
                            <a href="activities.html">
                              <i className="fa-solid fa-angles-right" />
                              Guide of the Year
                            </a>
                          </li>
                          <li>
                            <a href="activities.html">
                              <i className="fa-solid fa-angles-right" />
                              Guid registration
                            </a>
                          </li>
                          <li>
                            <a href="activities.html">
                              <i className="fa-solid fa-angles-right" />
                              creators
                            </a>
                          </li>
                          <li>
                            <a href="activities.html">
                              <i className="fa-solid fa-angles-right" />
                              Travel agents &amp; advisors
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 order-md-2 order-lg-3">
                <div className="footer-widgets">
                  <h5 className="widgets-title text-white-color text-capitalize">
                    instagram
                  </h5>
                  <div className="instagram">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="assets/img/instagram-post/instagram-1.png"
                        alt="instagram-1"
                        className="w-100"
                      />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="assets/img/instagram-post/instagram-2.png"
                        alt="instagram-2"
                        className="w-100"
                      />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="assets/img/instagram-post/instagram-3.png"
                        alt="instagram-3"
                        className="w-100"
                      />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="assets/img/instagram-post/instagram-4.png"
                        alt="instagram-4"
                        className="w-100"
                      />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="assets/img/instagram-post/instagram-5.png"
                        alt="instagram-5"
                        className="w-100"
                      />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="assets/img/instagram-post/instagram-6.png"
                        alt="instagram-6"
                        className="w-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-third-theme-color">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-2 order-md-1">
                <p className="footer-copyright text-center text-md-start">
                  © <span className="current-year" />
                  <a
                    href="index.html"
                    title="Develop by Vecuro"
                    className="text-theme-color"
                  >
                    Tripix
                  </a>
                  , All Rights Reserved by{" "}
                  <a href="https://themeforest.net/user/vecuro_themes/">
                    Vecuro
                  </a>
                </p>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="footer-menu">
                  <ul className="custom-ul justify-content-center justify-content-md-end">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq’s</a>
                    </li>
                    <li>
                      <a href="activities.html">Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
