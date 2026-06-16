import { useState } from "react";
import "../assets/scss/navbar.scss";

const navLinks = [
  { href: "#minusta", label: "Minusta" },
  { href: "#osteopatia", label: "Osteopatia" },
  { href: "#varaa-aika", label: "Varaa aika" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div>Logo goes here</div>
      <div className="nav-link-container">
        {navLinks.map(({ href, label }) => (
          <a key={href} className="nav-link" href={href}>
            {label}
          </a>
        ))}
      </div>
      <button
        className="burger-menu-button"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <div className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {mobileNavOpen && (
        <div className="mobile-nav-container">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className="nav-link"
              href={href}
              onClick={() => setMobileNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
