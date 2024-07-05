import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
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
    // { name: "Blog", slug: "/blog", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];

  const SVGIcons = [
    { component: <InstagramIcon />, url: "https://www.instagram.com/", active: true },
    { component: <LinkedInIcon />, url: "https://www.linkedin.com", active: true },
    { component: <CodepenIcon />, url: "https://x.com/home", active: true },
  ];

  return (
    <nav className="w-full bg-slate-300 py-5 flex justify-between px-20 items-center">
      <Link to="/">
        <div className="logo font-bold text-4xl">HR</div>
      </Link>

      <ul
        className={`lg:flex text text-xl gap-3 font-semibold ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
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

      <div className={`sm:flex items-center gap-5 ${
          isOpen ? "block" : "hidden"
        }  sm:block `}>
        {SVGIcons.map(
          (svg, index) =>
            svg.active && (
              <a href={svg.url}   onClick={() => {
                setIsOpen(false);
              }} key={index} target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                {svg.component}
              </a>
            )
        )}
      </div>

      <div className="lg:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`focus:outline-none ${isOpen ? "absolute top-[-70px] right-3" : ""}`}
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
