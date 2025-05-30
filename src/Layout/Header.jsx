import React from 'react'

const Header = () => {
  return (
   <>
<header className="vs-header layout1">
  {/* Main Menu Area */}
  <div className="sticky-wrapper position-relative">
    <div className="header-top-wrap">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-top">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-md-6 d-none d-md-block">
                  <div className="contact-info">
                    <ul className="custom-ul">
                      <li>
                        <i className="fa-solid fa-phone-volume" />
                        <a href="tel:+13334568890">+1 333.456.8890</a>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={4}
                          height={22}
                          viewBox="0 0 4 22"
                          fill="none"
                        >
                          <line
                            x1="0.75"
                            y1="2.774e-08"
                            x2="0.749999"
                            y2="21.6114"
                            stroke="white"
                            strokeOpacity="0.3"
                            strokeWidth="1.5"
                          />
                          <line
                            x1="3.5"
                            y1="3.92926"
                            x2="3.5"
                            y2="17.682"
                            stroke="white"
                            strokeOpacity="0.3"
                          />
                        </svg>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope" />
                        <a href="mailto:info@example.com">info@example.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="social-share">
                    <span className="info-share">Follow on:</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={22}
                      viewBox="0 0 4 22"
                      fill="none"
                    >
                      <line
                        x1="0.75"
                        y1="2.774e-08"
                        x2="0.749999"
                        y2="21.6114"
                        stroke="white"
                        strokeOpacity="0.3"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="3.5"
                        y1="3.92941"
                        x2="3.5"
                        y2="17.6821"
                        stroke="white"
                        strokeOpacity="0.3"
                      />
                    </svg>
                    <ul className="custom-ul">
                      <li>
                        <a href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</header>

   </>
  )
}

export default Header