import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="z-index-common hero-layout1 overflow-clip"
        style={{ backgroundImage: "url(/assets/img/hero/hero-layout1-bg.png)" }}
      >
        <div className="container-fluid p-xl-0">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-7">
              <div className="hero-content text-center">
                <img
                  className="fade-anim"
                  data-delay="0.70"
                  src="./assets/img/icons/hero-sun.png"
                  alt="icon"
                />
                <div className="title-area text-center">
                  {/* <span
                    className="sec-subtitle mb-0 fade-anim"
                    data-delay="0.75"
                    data-direction="bottom"
                  >
                    about tripik
                  </span> */}
                  <h1
                    className="sec-title text-white-color fade-anim"
                    data-delay="0.76"
                    data-direction="top"
                  >
                    Find your holiday <br className="d-none d-xxl-block" />
                    with us
                  </h1>
                </div>
                <div
                  className="search-box fade-anim"
                  data-delay="0.77"
                  data-direction="top"
                >
                  <form
                    action="https://html.vecurosoft.com/tripix/tripix-demo/index.html"
                    className="align-items-center"
                  >
                    {/* Destination Field */}
                    <div className="form-group ps-0">
                      <label
                        htmlFor="select-division"
                        className="form-label d-flex align-items-center"
                      >
                        <i className="fa-sharp fa-light fa-location-dot me-2" />
                        Destinations
                      </label>
                      <select
                        id="select-division"
                        name="division"
                        className="form-select"
                        required=""
                      >
                        <option value="" disabled="" selected="" hidden="">
                          Select Division
                        </option>
                        <option value="Barishal">Barishal</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                      </select>
                    </div>
                    {/* Date Field */}
                    <div className="form-group">
                      <label
                        htmlFor="search-date"
                        className="form-label d-flex align-items-center"
                      >
                        <i className="fa-regular fa-calendar-days me-2" />
                        Date
                      </label>
                      <input
                        type="text"
                        id="search-date"
                        name="searchDate"
                        className="form-select"
                        placeholder="Date from"
                        readOnly=""
                      />
                    </div>
                    {/* Guest Field */}
                    <div className="form-group">
                      <label
                        htmlFor="guest-dropdown"
                        className="form-label d-flex align-items-center"
                      >
                        <i className="fa-regular fa-user-hoodie me-2" /> Guest
                      </label>
                      <select
                        id="guest-dropdown"
                        name="guest"
                        className="form-select"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                        <option value={5}>5 Guests</option>
                      </select>
                    </div>
                    {/* Submit Button */}
                    <div className="form-group pe-0">
                      <button type="submit" className="vs-btn style4 w-100">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
