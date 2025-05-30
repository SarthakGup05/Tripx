import { Link } from "react-router-dom";
import PopupSearch from "../components/PopupSearch";

const menuData = [
  {
    title: "Home",
    path: "/",
    // children: [
    //   { title: "Home 1", path: "/" },
    //   { title: "Home 2", path: "/index-2" },
    //   { title: "Home 3", path: "/index-3" },
    // ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Destinations",
    path: "/destination",
    children: [
      { title: "Destinations", path: "/destination" },
      { title: "Destination Details", path: "/destination-detail" },
    ],
  },
  // {
  //   title: "Pages",
  //   megaMenu: true,
  //   children: [
  //     {
  //       title: "Page List 1",
  //       items: [
  //         { title: "Home 1", path: "/" },
  //         { title: "Home 2", path: "/index-2" },
  //         { title: "Home 3", path: "/index-3" },
  //         { title: "About", path: "/about" },
  //       ],
  //     },
  //     {
  //       title: "Page List 2",
  //       items: [
  //         { title: "Faq's", path: "/faq" },
  //         { title: "Activities", path: "/activities" },
  //         { title: "Blog", path: "/blog" },
  //         { title: "Blog Details", path: "/blog-details" },
  //       ],
  //     },
  //     {
  //       title: "Page List 3",
  //       items: [
  //         { title: "Trip", path: "/trips" },
  //         { title: "Destinations", path: "/destinations" },
  //         { title: "Destination Details", path: "/destination-details" },
  //         { title: "404 Error", path: "/404" },
  //       ],
  //     },
  //     {
  //       title: "Page List 4",
  //       items: [{ title: "Contact Us", path: "/contact" }],
  //     },
  //   ],
  // },
  {
    title: "Blog",
    path: "/blog",

  },
  {
    title: "Faq's",
    path: "/faq",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <div id="navbars" className="header-sticky navbars">
      <div className="container custom-container">
        <div className="row justify-content-between align-items-center">
          {/* Left Logo */}
          <div className="col-auto col-lg-2">
            <button className="vs-menu-toggle d-inline-block d-lg-none">
              <i className="fal fa-bars" />
            </button>
            <div className="logo d-none d-lg-block">
              <Link to="/">
                <img src="/assets/img/logo.svg" alt="Logo" className="logo" />
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div className="col-xl-auto col-lg-auto col-sm-3 d-none d-sm-block">
            <nav className="main-menu d-none d-lg-block">
              <ul>
                {menuData.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      item.children ? "menu-item-has-children" : ""
                    } ${item.megaMenu ? "mega-menu-wrap" : ""}`}
                  >
                    {item.path ? (
                      <Link to={item.path}>{item.title}</Link>
                    ) : (
                      <span>{item.title}</span>
                    )}

                    {/* Dropdown */}
                    {item.children && !item.megaMenu && (
                      <ul className="sub-menu">
                        {item.children.map((subItem, i) => (
                          <li key={i}>
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Mega Menu */}
                    {item.megaMenu && (
                      <ul className="mega-menu">
                        {item.children.map((group, groupIndex) => (
                          <li key={groupIndex}>
                            <span>{group.title}</span>
                            <ul>
                              {group.items.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link to={link.path}>{link.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Logo */}
            <div className="logo d-lg-none">
              <Link to="/">
                <img src="/assets/img/logo.svg" alt="Logo" className="logo" />
              </Link>
            </div>
          </div>

          {/* Right CTA & Search */}
          <div className="col-xl-3 col-md-auto col-auto">
            <div className="header-wc style2">
             <PopupSearch/>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={6}
                height={39}
                viewBox="0 0 6 39"
                fill="none"
              >
                <rect
                  x={5}
                  width={1}
                  height={39}
                  fill="#D9D9D9"
                  fillOpacity="0.7"
                />
                <rect
                  y={9}
                  width={1}
                  height={20}
                  fill="#D9D9D9"
                  fillOpacity="0.7"
                />
              </svg>

              <div className="logo d-none d-sm-block">
                <Link to="/contact" className="vs-btn style10">
                  <span>let’s plan</span>
                </Link>
              </div>

              <div className="logo d-sm-none">
                <Link to="/">
                  <img
                    src="/assets/img/logo.svg"
                    alt="Carmax"
                    className="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
