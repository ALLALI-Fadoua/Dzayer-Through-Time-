import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Icon from "../common/Icon";
import logoImg from "../../assets/images/logo-dark.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/timeline", label: "الزمن" },
  { to: "/map", label: "المعالم" },
  { to: "/events", label: "الأحداث" },
  { to: "/gallery", label: "معرض الصور" },
  { to: "/statistics", label: "الإحصائيات" },
  { to: "/about", label: "عن المشروع" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(237,232,220,0.97)" : "rgba(237,232,220,0.9)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logoImg}
            alt="دزاير عبر الزمن"
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover shrink-0"
          />
          <div className="leading-[1.1]">
            <p className="font-extrabold text-lg" style={{ color: "#0B3D2E" }}>دزاير</p>
            <p className="font-extrabold text-base" style={{ color: "#C9A227" }}>عبر الزمن</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-colors relative ${
                    isActive ? "text-primary-700" : "text-gray-500 hover:text-primary-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 right-4 left-4 h-0.5 rounded-full"
                        style={{ backgroundColor: "#C9A227" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          to="/timeline"
          className="hidden lg:block px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all hover:opacity-90 shadow-md shrink-0"
          style={{ backgroundColor: "#0B3D2E" }}
        >
          استكشف الآن
        </Link>

        {/* Mobile burger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#EDE8DC" }}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={18} color="#0B3D2E" strokeWidth={1.8} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t px-5 py-4" style={{ borderColor: "#E3DCC9", backgroundColor: "#EDE8DC" }}>
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-semibold ${
                      isActive ? "text-white" : "text-gray-600"
                    }`
                  }
                  style={({ isActive }) => isActive ? { backgroundColor: "#0B3D2E" } : {}}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}