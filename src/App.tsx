import "./assets/scss/App.scss";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ReserveTime from "./pages/ReserveTime";
import WhatCanBeTreated from "./pages/WhatCanBeTreated";
import WhatOsteopathyIs from "./pages/WhatOsteopathyIs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div>
        <Home />
        <AboutMe />
        <WhatOsteopathyIs />
        <WhatCanBeTreated />
        <ReserveTime />
        <Contact />
      </div>
    </div>
  );
}

export default App;
