import type { ReactElement } from "react";
import "../assets/scss/home.scss";
import SectionHeading from "../components/SectionHeading";

const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="text-container">
        <SectionHeading
          bgVariant="light"
          nonItalics="Tukemassa kehosi"
          italics="luonnollista tasapainoa"
        />
      </div>
      <div className="image-container">Image side</div>
    </div>
  );
};

export default Home;
