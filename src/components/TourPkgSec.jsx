import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tourPackages = [
  {
    img: "assets/img/tour-packages/tour-package-1-1.png",
    title: "Discover our luxury tour thailand & vietnam",
    location: "Thailand, Vietnam, Nepal",
    duration: "6 Days - 2 Nights",
    price: 450,
    oldPrice: 550,
    discount: "50% off",
  },
  {
    img: "assets/img/tour-packages/tour-package-1-2.png",
    title: "Luxury escapes in Bali & Cambodia",
    location: "Bali, Cambodia",
    duration: "5 Days - 3 Nights",
    price: 480,
    oldPrice: 600,
    discount: "20% off",
  },
  {
    img: "assets/img/tour-packages/tour-package-1-3.png",
    title: "Himalayan adventures in Nepal & Bhutan",
    location: "Nepal, Bhutan",
    duration: "7 Days - 4 Nights",
    price: 700,
    oldPrice: 875,
    discount: "20% off",
  },
];

export const TourPkgSec = () => {
  return (
    <section className="vs-tour-package space">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-lg-6 col-xxl-5">
            <div className="title-area text-center text-md-start">
              <span className="sec-subtitle fade-anim" data-direction="bottom">
                Awesome Tours
              </span>
              <h2 className="sec-title fade-anim" data-direction="top">
                Awesome Tips with us
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xxl-5">
            <div className="swiper-arrow2 tour-packages-navigation justify-content-center justify-content-md-end">
              <div className="tour-packages-prev btn-right">←</div>
              <div className="tour-packages-next">→</div>
            </div>
          </div>
          <div className="col-12 mt-30 fade-anim" data-direction="right">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-packages-next",
                prevEl: ".tour-packages-prev",
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="tour-package-slider"
            >
              {tourPackages.map((pkg, idx) => (
                <SwiperSlide key={idx}>
                  <div className="tour-package-box bg-white-color">
                    <div className="tour-package-thumb">
                      <img src={pkg.img} alt="tour-package" className="w-100" />
                    </div>
                    <div className="tour-package-content">
                      <h5 className="title line-clamp-2">
                        <a href="destination-details.html">{pkg.title}</a>
                      </h5>
                      <div className="pricing-container">
                        <div className="package-info">
                          <span className="package-location">
                            <i className="fa-sharp fa-thin fa-location-dot" />
                            {pkg.location}
                          </span>
                          <span className="package-time">
                            <i className="fa-sharp fa-thin fa-clock" />
                            {pkg.duration}
                          </span>
                        </div>
                        <div className="price-info">
                          <span className="price-off text-white-color ff-poppins">
                            {pkg.discount}
                          </span>
                          <div className="price">
                            <h6 className="fs-30 ff-rubik">${pkg.price}</h6>
                            <del className="fs-sm ff-rubik">${pkg.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                      <a href="destination-details.html" className="vs-btn style7 w-100">
                        Book Now
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
