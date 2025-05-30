import React from "react";

const BreadcrumbSection = ({
  title = "Page Title",
  backgroundImage = "assets/img/bg/breadcrumb-bg.png",
  icon1 = "assets/img/icons/cloud.png",
  icon2 = "assets/img/icons/ballon-sclation.png",
  path = [
    { name: "Home", url: "/" },
    { name: "Current Page" },
  ],
}) => {
  return (
    <section
      className="relative bg-cover bg-center py-20 h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Animated icons */}
      <img
        src={icon1}
        alt="breadcrumb-icon"
        className="absolute left-10 top-40 w-16 animate-bounce"
      />
      <img
        src={icon2}
        alt="breadcrumb-icon"
        className="absolute right-10 bottom-10 w-16 animate-bounce"
      />

      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <ul className="inline-flex gap-2 text-white text-lg">
          {path.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.url ? (
                <a href={item.url} className="hover:underline">
                  {item.name}
                </a>
              ) : (
                <span className="text-white">{item.name}</span>
              )}
              {index < path.length - 1 && <span>/</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
