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

const Pages: Record<string, Page> = {
  Main: "Main",
  Research: "Research",
};

const Languages = {
  Finnish: "Suomi",
  English: "English",
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];

function App() {
  const [activePage, setActivePage] = useState<Page>(Pages.Main);
  const [activeLanguage, setActiveLanguage] = useState<Language>(Languages.Finnish);

  useEffect(() => {
    document.documentElement.lang = activeLanguage === "Suomi" ? "fi" : "en";
  }, [activeLanguage]);

  const navigate = (page: Page, section?: string) => {
    setActivePage(page);
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
        {activeLanguage === "Suomi" ? "Siirry pääsisältöön" : "Skip to main content"}
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
      </main>
      <Footer activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
    </div>
  );
}

export default App;
