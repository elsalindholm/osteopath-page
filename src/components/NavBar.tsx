import { useState, useEffect, useRef } from "react";
import "../assets/scss/navbar.scss";
import type { Language } from "../App";
import BrandLogo from "./BrandLogo";

export type Page =
  | "Main"
  | "Research"
  | "Privacy"
  | "Terms"
  | "OmaValvontaSuunnitelma";

interface NavLink {
  page: Page;
  section?: string;
  label: string;
}

const osteopatiaLinksFin: NavLink[] = [
  { page: "Main", section: "#osteopatia", label: "Mitä osteopatia on" },
  { page: "Main", section: "#hoito", label: "Mitä osteopatialla voi hoitaa" },
  { page: "Research", label: "Linkkejä tutkimuksiin" },
];

const osteopatiaLinksEng: NavLink[] = [
  { page: "Main", section: "#osteopatia", label: "What is osteopathy" },
  {
    page: "Main",
    section: "#hoito",
    label: "Osteopathic treatment",
  },
  { page: "Research", label: "Links to research" },
];

interface NavBarProps {
  navigate: (page: Page, section?: string) => void;
  activeLanguage: Language;
  activePage: Page;
}

const NavBar = ({ navigate, activeLanguage, activePage }: NavBarProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [osteopatiaOpen, setOsteopatiaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const osteopatiaLinks =
    activeLanguage === "Suomi" ? osteopatiaLinksFin : osteopatiaLinksEng;

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
      <button
        className="logo-container"
        onClick={() => navigate("Main", "#home")}
      >
        <BrandLogo variant="light" />
      </button>
      <div className="nav-link-container">
        <div
          className="nav-dropdown"
          ref={dropdownRef}
          onKeyDown={(e) => {
            if (e.key === "Escape" && osteopatiaOpen) {
              setOsteopatiaOpen(false);
              dropdownButtonRef.current?.focus();
            }
          }}
        >
          <button
            ref={dropdownButtonRef}
            className="nav-link nav-dropdown__button"
            aria-expanded={osteopatiaOpen}
            aria-controls="osteopatia-dropdown"
            onClick={() => setOsteopatiaOpen(!osteopatiaOpen)}
          >
            {activeLanguage === "Suomi" ? "Osteopatia" : "Osteopathy"}
          </button>
          {osteopatiaOpen && (
            <div id="osteopatia-dropdown" className="nav-dropdown__menu">
              {osteopatiaLinks.map(({ page, section, label }) => (
                <button
                  key={label}
                  className="nav-link"
                  aria-current={
                    page === activePage && !section ? "page" : undefined
                  }
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
          {activeLanguage === "Suomi" ? "Minusta" : "About me"}
        </button>
        <button
          className="nav-link"
          onClick={() => navigate("Main", "#varaa-aika")}
        >
          {activeLanguage === "Suomi" ? "Varaa aika" : "Appointments"}
        </button>
        <button
          className="nav-link"
          onClick={() => navigate("Main", "#yhteystiedot")}
        >
          {activeLanguage === "Suomi" ? "Yhteystiedot" : "Contact"}
        </button>
      </div>
      <button
        className="burger-menu-button"
        aria-label={activeLanguage === "Suomi" ? "Avaa valikko" : "Open menu"}
        aria-expanded={mobileNavOpen}
        aria-controls="mobile-nav"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <div className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {mobileNavOpen && (
        <div id="mobile-nav" className="mobile-nav-container">
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#osteopatia");
              setMobileNavOpen(false);
            }}
          >
            {activeLanguage === "Suomi" ? "Osteopatia" : "Osteopathy"}
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
            {activeLanguage === "Suomi" ? "Minusta" : "About me"}
          </button>
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#varaa-aika");
              setMobileNavOpen(false);
            }}
          >
            {activeLanguage === "Suomi" ? "Varaa aika" : "Appointments"}
          </button>
          <button
            className="nav-link"
            onClick={() => {
              navigate("Main", "#yhteystiedot");
              setMobileNavOpen(false);
            }}
          >
            {activeLanguage === "Suomi" ? "Yhteystiedot" : "Contact"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
