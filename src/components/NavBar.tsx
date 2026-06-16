import { useState } from "react";
import "../assets/scss/navbar.scss";

const osteopatiaLinks = [
  { href: "#osteopatia", label: "Mitä osteopatia on" },
  { href: "#hoito", label: "Mitä osteopatialla voi hoitaa" },
  { href: "#", label: "Linkkejä tutkimuksiin" },
];

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [osteopatiaOpen, setOsteopatiaOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div>Logo goes here</div>
      <div className="nav-link-container">
        <a className="nav-link" href="#minusta">
          Minusta
        </a>
        <div className="nav-dropdown">
          <button
            className="nav-link nav-dropdown__button"
            onClick={() => setOsteopatiaOpen(!osteopatiaOpen)}
          >
            Osteopatia
          </button>
          {osteopatiaOpen && (
            <div className="nav-dropdown__menu">
              {osteopatiaLinks.map(({ href, label }) => (
                <a
                  key={label}
                  className="nav-link"
                  href={href}
                  onClick={() => setOsteopatiaOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
        <a className="nav-link" href="#varaa-aika">
          Varaa aika
        </a>
        <a className="nav-link" href="#yhteystiedot">
          Yhteystiedot
        </a>
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
          <a
            className="nav-link"
            href="#minusta"
            onClick={() => setMobileNavOpen(false)}
          >
            Minusta
          </a>
          <a
            className="nav-link"
            href="#osteopatia"
            onClick={() => setMobileNavOpen(false)}
          >
            Osteopatia
          </a>
          <div className="mobile-nav-container__sublinks">
            {osteopatiaLinks.map(({ href, label }) => (
              <a
                key={label}
                className="nav-link"
                href={href}
                onClick={() => setMobileNavOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <a
            className="nav-link"
            href="#varaa-aika"
            onClick={() => setMobileNavOpen(false)}
          >
            Varaa aika
          </a>
          <a
            className="nav-link"
            href="#yhteystiedot"
            onClick={() => setMobileNavOpen(false)}
          >
            Yhteystiedot
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
