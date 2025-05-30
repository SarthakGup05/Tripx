import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchWidget from "../components/SearchWidget";

const blogPosts = [
  {
    id: 1,
    image: "/assets/img/blog/blog-3-1.png",
    title: "Indonesia Your Dream Destination",
    author: "Frenk",
    date: "April 27, 2024",
    text: "Rainbow’s high-tech cleaning systems help remove unseen dust mites and bed bugs, preventing harmful diseases caused by dirt. This also includes handling home bed linens and providing specialized deep cleaning services.",
  },
  {
    id: 2,
    image: "/assets/img/blog/blog-3-3.png",
    title: "Famiglia Bambini Riviera Romagnola",
    author: "Frenk",
    date: "April 27, 2024",
    text: "Rainbow’s high-tech cleaning systems help remove unseen dust mites and bed bugs, preventing harmful diseases caused by dirt. This also includes handling home bed linens and providing specialized deep cleaning services.",
  },
];

const recentPosts = [
  "Cleaning Your Mattress Properly",
  "Best Beaches to Visit in 2024",
  "Tips for Deep Cleaning at Home",
];

const categories = ["Travel", "Cleaning", "Lifestyle", "Health", "Events"];
const tags = ["Vacation", "Home", "Sanitize", "Adventure", "Eco-Friendly"];

const trendingBlogs = [
  "10 Must-See Places in Bali",
  "Eco Cleaning: The Future",
  "Hidden Travel Gems for 2024",
];

const BlogSection = () => {
  return (
    <section className="blog-area py-12 lg:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="blog__item shadow-lg hover:shadow-xl transition-all duration-300 border-none bg-white rounded-xl overflow-hidden"
              >
                <div className="blog__thumb overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 blog__content space-y-4">
                  <div className="flex flex-wrap justify-between text-sm text-gray-600">
                    <span className="blog__meta">
                      By:{" "}
                      <span className="font-medium text-black">
                        {post.author}
                      </span>
                    </span>
                    <span className="blog__meta flex items-center">
                      <i className="fa-regular fa-calendar-days mr-2 text-orange-500"></i>
                      {post.date}
                    </span>
                  </div>
                  <h2 className="blog__title text-2xl font-bold text-black hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="blog__text text-gray-700">{post.text}</p>
                  <div className="flex justify-between items-center mt-4">
                    <Button
                      variant="link"
                      className="blog__btn p-0 h-auto text-orange-600 hover:text-orange-800 font-semibold"
                    >
                      Read more{" "}
                      <i className="ml-2 fa-sharp fa-regular fa-angles-right"></i>
                    </Button>
                    <div className="blog__social flex items-center space-x-3 text-sm">
                      <span className="text-gray-600">Share:</span>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-orange-600"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-orange-600"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-orange-600"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-orange-600"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <SearchWidget />

            {/* Recent Posts */}
            <Card className="blog__widget p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-black mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3 text-sm">
                {recentPosts.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fa-solid fa-angle-right text-orange-600 mr-2"></i>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-orange-600 font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Categories */}
            <Card className="blog__widget p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-black mb-4">Categories</h3>
              <ul className="space-y-3 text-sm">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-orange-600 font-medium flex items-center"
                    >
                      <i className="fa-solid fa-circle text-xs text-orange-600 mr-2"></i>
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Tags */}
            <Card className="blog__widget p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-black mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="tag px-3 py-1 text-xs rounded-full text-white bg-orange-600 hover:bg-orange-700 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            {/* 🔥 Trending Blogs */}
            <Card className="blog__widget p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-black mb-4">
                 Trending Blogs
              </h3>
              <ul className="space-y-3 text-sm">
                {trendingBlogs.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fa-solid fa-fire text-orange-600 mr-2"></i>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-orange-600 font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
