import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InstagramIcon, LinkedInIcon, CodepenIcon } from "../svgIcon/Svg";

function Header() {
  useGSAP(() => {
    gsap.from(".logo", {
      y: -20,
      duration: 0.8,
      opacity: 0,
      delay: 0.5,
    });

    gsap.from(".li-text", {
      y: -20,
      duration: 0.8,
      opacity: 0,
      delay: 1,
      stagger: 0.2,
    });
    gsap.from("svg", {
      x: -30,
      duration: 0.8,
      opacity: 0,
      delay: 1.5,
      stagger: 0.2,
    });
  });

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "About", slug: "/about", active: true },
    { name: "Project", slug: "/projects", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];

  const SVGIcons = [
    { component: <InstagramIcon />, url: "https://www.instagram.com/", active: true },
    { component: <LinkedInIcon />, url: "https://www.linkedin.com", active: true },
    { component: <CodepenIcon />, url: "https://x.com/home", active: true },
  ];

  // Toggle overflow on the body when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="w-full bg-slate-300 py-5 flex justify-between px-20 items-center">
      <Link to="/">
        <div className="logo font-bold text-4xl">HP</div>
      </Link>

      <ul
        className={`fixed top-0 right-0 h-full w-2/3 bg-slate-300 flex flex-col md:flex-col lg:flex-row lg:relative lg:translate-x-0 lg:w-auto lg:bg-transparent lg:p-0 lg:gap-3 lg:top-auto lg:right-auto z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="self-end mb-5 text-3xl font-bold text-slate-700 hover:text-black focus:outline-none lg:hidden"
        >
          &times;
        </button>

        {navItems.map(
          (item) =>
            item.active && (
              <li className="li-text" key={item.name}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate(item.slug);
                  }}
                  className="inline-block px-6 py-2 duration-200 rounded-full hover:underline"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
      </ul>


      {/* Social Icons */}
      <div
        className={`sm:flex items-center gap-5 ${isOpen ? "block" : "hidden"} sm:block`}
      >
        {SVGIcons.map(
          (svg, index) =>
            svg.active && (
              <a
                href={svg.url}
                onClick={() => setIsOpen(false)}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5"
              >
                {svg.component}
              </a>
            )
        )}
      </div>

      {/* Menu Toggle Button */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`focus:outline-none ${isOpen ? "absolute top-[-70px] right-3" : ""
            }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Header;
