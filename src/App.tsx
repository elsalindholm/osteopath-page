import "./assets/scss/App.scss";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ReserveTime from "./pages/ReserveTime";
import WhatCanBeTreated from "./pages/WhatCanBeTreated";
import WhatOsteopathyIs from "./pages/WhatOsteopathyIs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import type { Page } from "./components/NavBar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Research from "./pages/Research";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import OmaValvontaSuunnitelma from "./pages/OmaValvontaSuunnitelma";

const Pages: Record<string, Page> = {
  Main: "Main",
  Research: "Research",
  Privacy: "Privacy",
  Terms: "Terms",
  OmaValvontaSuunnitelma: "OmaValvontaSuunnitelma",
};

const PAGE_PATHS: Partial<Record<Page, string>> = {
  Privacy: "/tietosuojaseloste",
  Terms: "/yleiset-varausehdot",
  OmaValvontaSuunnitelma: "/omavalvontasuunnitelma",
};

const getPageFromPath = (pathname: string): Page => {
  const match = (Object.keys(PAGE_PATHS) as Page[]).find(
    (page) => PAGE_PATHS[page] === pathname,
  );
  return match ?? Pages.Main;
};

const Languages = {
  Finnish: "Suomi",
  English: "English",
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];

const LANGUAGE_STORAGE_KEY = "activeLanguage";

const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "English" ? "English" : Languages.Finnish;
};

function App() {
  const [activePage, setActivePage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname),
  );
  const [activeLanguage, setActiveLanguage] =
    useState<Language>(getStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = activeLanguage === "Suomi" ? "fi" : "en";
    localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
  }, [activeLanguage]);

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (page: Page, section?: string) => {
    setActivePage(page);
    const path = PAGE_PATHS[page] ?? "/";
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setTimeout(() => {
      if (section) {
        document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {activeLanguage === "Suomi"
          ? "Siirry pääsisältöön"
          : "Skip to main content"}
      </a>
      <h1 className="sr-only">Osteopaatti Elias Lindholm</h1>
      <NavBar
        navigate={navigate}
        activeLanguage={activeLanguage}
        activePage={activePage}
      />
      <main id="main-content">
        {activePage == Pages.Main && (
          <div>
            <Home activeLanguage={activeLanguage} />
            <WhatOsteopathyIs activeLanguage={activeLanguage} />
            <WhatCanBeTreated activeLanguage={activeLanguage} />
            <AboutMe activeLanguage={activeLanguage} />
            <ReserveTime activeLanguage={activeLanguage} />
            <Contact activeLanguage={activeLanguage} />
          </div>
        )}
        {activePage == Pages.Research && (
          <Research activeLanguage={activeLanguage} />
        )}
        {activePage == Pages.Privacy && <PrivacyPolicy />}
        {activePage == Pages.Terms && (
          <TermsAndConditions activeLanguage={activeLanguage} />
        )}
        {activePage == Pages.OmaValvontaSuunnitelma && (
          <OmaValvontaSuunnitelma />
        )}
      </main>
      <Footer
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        navigate={navigate}
      />
    </div>
  );
}

export default App;
