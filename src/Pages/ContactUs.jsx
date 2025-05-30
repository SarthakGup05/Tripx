import React from "react";
import BreadcrumbSection from "../components/BreadcrumpSec";

const ContactUs = () => {
  return (
    <div>
      <BreadcrumbSection
        title="Contact Us"
        backgroundImage="assets/img/bg/breadcrumb-bg.png"
        icon1="assets/img/icons/cloud.png"
        icon2="assets/img/icons/ballon-sclation.png"
        path={[{ name: "Home", url: "/" }, { name: "Contact Us" }]}
      />
      <section className="vs-contact space">
        <div className="container">
          <div className="row g-4 gx-xl-5 overflow-hidden">
            <div className="col-lg-5">
              <div className="title-area text-start mb-2">
                <span className="sec-subtitle style-2">contact us</span>
                <h2 className="sec-title">Get in touch with us</h2>
              </div>
              <div className="vs-contact-info mt-3 mb-2">
                <p>
                  <span className="text-theme-color fw-bold">Address:</span>{" "}
                  tripix wQ 966 munich Express 70 Germany, park lan, TX 7859
                </p>
                <div className="vs-contact-list">
                  <div className="contact-item">
                    <span className="icon">
                      <i className="fa-solid fa-phone-volume" />
                    </span>
                    <div className="info">
                      <h6 className="info-title">Customer Service :</h6>
                      <p>
                        <a href="tel:+9555888679">+9-555-888-679</a> ,
                        <a href="tel:+9666888679">+9-666-888-679</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="icon">
                      <i className="fa-light fa-envelope" />
                    </span>
                    <div className="info">
                      <h6 className="info-title">careers :</h6>
                      <p>
                        <a href="mailto:exemple@info.com">exemple@info.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="social-follow">
                  <span>Follow Us :</span>
                  <ul className="custom-ul">
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
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-vimeo-v" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                action="https://html.vecurosoft.com/tripix/tripix-demo/index.html"
                className="form-style1 ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      name="fname"
                      type="text"
                      className="form-control"
                      placeholder="First Name*"
                      required=""
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      name="fname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name*"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email*"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone*"
                      required=""
                    />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Message..."
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group mt-2 mb-0">
                    <button className="vs-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                  <p className="form-messages mb-0 mt-3" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
