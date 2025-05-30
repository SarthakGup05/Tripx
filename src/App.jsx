import { Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

import Layout from "./Layout/Layout";
import Loader from "./components/ui/Loader";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Tour = lazy(() => import("./Pages/Tour"));
const Destinations = lazy(() => import("./Pages/Destinations"));
const DestinationDetail = lazy(() => import("./Pages/DestinationDetail"));
const BlogSection = lazy(() => import("./Pages/Blogs"));
const BlogsDetail = lazy(() => import("./Pages/BlogsDetail"));
const FAQPage = lazy(() => import("./Pages/Faq"));
const About = lazy(() => import("./Pages/About"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // initial preloader delay
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader delay={500} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/packages" element={<Tour />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/destination-detail" element={<DestinationDetail />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog/blog-detail" element={<BlogsDetail />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
