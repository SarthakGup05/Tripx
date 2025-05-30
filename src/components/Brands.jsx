import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandLogos = [
    "partner-1-1.svg",
    "partner-1-2.svg",
    "partner-1-3.svg",
    "partner-1-4.svg",
    "partner-1-5.svg",
    "partner-1-1.svg",
    "partner-1-2.svg",
    "partner-1-3.svg",
    "partner-1-4.svg",
    "partner-1-5.svg",
  ];

  return (
    <div className="w-full py-10 bg-white p-4">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {brandLogos.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={`assets/img/partner/${img}`}
                alt="partner"
                className="h-16 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
