import React from "react";
import Hero from "../components/Hero";
import TopDestinationsSec from "../components/TopDestinationsSec";
import { TourPkgSec } from "../components/TourPkgSec";
import DestinationGallery from "../components/DestinationGallery";
import FeatureArea from "../components/FeatureArea";
import ServiceSec from "../components/ServiceSec";
import AwardSec from "../components/AwardSec";
import BlogsSec from "../components/BlogsSec";

const Home = () => {
  return (
    <>
      <Hero />
      <TopDestinationsSec />
      <TourPkgSec/>
      <DestinationGallery/>
      <FeatureArea/>
      <ServiceSec/>
      <AwardSec/>
      <BlogsSec/>
    </>
  );
};

export default Home;
