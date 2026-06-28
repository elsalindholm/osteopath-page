import "./assets/scss/App.scss";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ReserveTime from "./pages/ReserveTime";
import WhatCanBeTreated from "./pages/WhatCanBeTreated";
import WhatOsteopathyIs from "./pages/WhatOsteopathyIs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import type { Page } from "./components/NavBar";
import { useState } from "react";
import Research from "./pages/Research";

const Pages: Record<string, Page> = {
  Main: "Main",
  Research: "Research",
};

function App() {
  const [activePage, setActivePage] = useState<Page>(Pages.Main);

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
      <NavBar navigate={navigate} />
      {activePage == Pages.Main && (
        <div>
          <Home />
          <WhatOsteopathyIs />
          <WhatCanBeTreated />
          <AboutMe />
          <ReserveTime />
          <Contact />
        </div>
      )}
      {activePage == Pages.Research && <Research />}
    </div>
  );
}

export default App;
