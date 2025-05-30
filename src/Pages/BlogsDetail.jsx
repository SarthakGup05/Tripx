import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogsDetail = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-6 lg:p-10 bg-white shadow-lg rounded-xl space-y-6">
          {/* Blog Header Image */}
          <div className="w-full h-80 rounded-xl overflow-hidden">
            <img
              src="/assets/img/blog/blog-3-1.png"
              alt="Blog Header"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-between text-sm text-gray-500">
            <span>
              By <span className="text-black font-medium">Frenk</span>
            </span>
            <span className="flex items-center">
              <i className="fa-regular fa-calendar-days mr-2 text-orange-500"></i>
              April 27, 2024
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
            Indonesia Your Dream Destination
          </h1>

          {/* Content */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Rainbow’s high-tech cleaning systems help remove unseen dust mites and bed bugs, preventing harmful diseases caused by dirt. This also includes handling home bed linens and providing specialized deep cleaning services.
            </p>
            <p>
              With a focus on hygiene, Rainbow’s techniques are designed to go deep into your fabric surfaces and eliminate allergens. Their services are essential for families with children, pets, or members who are sensitive to dust or mites.
            </p>
            <p>
              From Indonesia’s scenic beauty to expert hygiene tips, this blog explores how cleanliness enhances your travel and home experience. Our mission is to ensure every traveler returns to a home as fresh and clean as their best holiday moments.
            </p>
          </div>

          {/* Tags & Share */}
          <div className="flex flex-wrap justify-between items-center mt-6">
            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs bg-orange-600 text-white rounded-full">
                Travel
              </span>
              <span className="px-3 py-1 text-xs bg-orange-600 text-white rounded-full">
                Hygiene
              </span>
              <span className="px-3 py-1 text-xs bg-orange-600 text-white rounded-full">
                Adventure
              </span>
            </div>

            {/* Social Share */}
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-gray-600">Share:</span>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
            >
              <i className="fa-solid fa-arrow-left mr-2" />
              Back to Blog
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogsDetail;
