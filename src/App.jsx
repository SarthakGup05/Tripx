import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Tour from "./Pages/Tour";
import Destinations from "./Pages/Destinations";
import DestinationDetail from "./Pages/DestinationDetail";
import BlogSection from "./Pages/Blogs";
import BlogsDetail from "./Pages/BlogsDetail";
import FAQPage from "./Pages/Faq";
import About from "./Pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/packages" element={<Tour/>} />
        <Route path="/destination" element={<Destinations/>} />
        <Route path="/destination-detail" element={<DestinationDetail/>} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/blog-detail" element={<BlogsDetail />} />
        <Route path="/faq" element={<FAQPage />} />
         <Route path="/about" element={<About />} />

      </Route>
    </Routes>
    </>
  );
}

export default App;
