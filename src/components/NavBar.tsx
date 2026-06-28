import { useState, useEffect, useRef } from "react";
import "../assets/scss/navbar.scss";

export type Page = "Main" | "Research";

interface NavLink {
  page: Page;
  section?: string;
  label: string;
}

const osteopatiaLinks: NavLink[] = [
  { page: "Main", section: "#osteopatia", label: "Mitä osteopatia on" },
  { page: "Main", section: "#hoito", label: "Mitä osteopatialla voi hoitaa" },
  { page: "Research", label: "Linkkejä tutkimuksiin" },
];

interface NavBarProps {
  navigate: (page: Page, section?: string) => void;
}

const NavBar = ({ navigate }: NavBarProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [osteopatiaOpen, setOsteopatiaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOsteopatiaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar-container">
      <button className="logo-container" onClick={() => navigate("Main", "#home")}>
        <div className="logo-first-row">Osteopaatti</div>
        <div className="logo-second-row">Elias Lindholm</div>
      </button>
      <div className="nav-link-container">
        <div className="nav-dropdown" ref={dropdownRef}>
          <button
            className="nav-link nav-dropdown__button"
            onClick={() => setOsteopatiaOpen(!osteopatiaOpen)}
          >
            Osteopatia
          </button>
          {osteopatiaOpen && (
            <div className="nav-dropdown__menu">
              {osteopatiaLinks.map(({ page, section, label }) => (
                <button
                  key={label}
                  className="nav-link"
                  onClick={() => {
                    navigate(page, section);
                    setOsteopatiaOpen(false);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          className="nav-link"
          onClick={() => navigate("Main", "#minusta")}
        >
          Minusta
        </button>
        <button
          className="nav-link"
          onClick={() => navigate("Main", "#varaa-aika")}
        >
          Varaa aika
        </button>
        <button
          className="nav-link"
          onClick={() => navigate("Main", "#yhteystiedot")}
        >
          Yhteystiedot
        </button>
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
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#osteopatia");
              setMobileNavOpen(false);
            }}
          >
            Osteopatia
          </button>
          <div className="mobile-nav-container__sublinks">
            {osteopatiaLinks.map(({ page, section, label }) => (
              <button
                key={label}
                className="nav-link"
                onClick={() => {
                  navigate(page, section);
                  setMobileNavOpen(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#minusta");
              setMobileNavOpen(false);
            }}
          >
            Minusta
          </button>
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#varaa-aika");
              setMobileNavOpen(false);
            }}
          >
            Varaa aika
          </button>
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#yhteystiedot");
              setMobileNavOpen(false);
            }}
          >
            Yhteystiedot
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
