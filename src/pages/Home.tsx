import type { ReactElement } from "react";
import "../assets/scss/home.scss";
import SectionHeading from "../components/SectionHeading";
import BodyText from "../components/BodyText";
import ButtonLink from "../components/ButtonLink";

const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="filter"></div>
      <div className="home__flex-row">
        <div className="text-container">
          <SectionHeading
            bgVariant="dark"
            nonItalics="Tukemassa kehosi"
            italics="luonnollista tasapainoa"
          />
          <BodyText bgVariant="dark">
            Hellävaraista, ihmislähtöistä, näyttöön perustuvaa osteopaattista
            hoitoa koko keholle
          </BodyText>
          <div className="button-container">
            <ButtonLink variant="medium" href="#varaa-aika">
              Varaa aika
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
