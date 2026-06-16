import type { ReactElement } from "react";
import "../assets/scss/home.scss";
import SectionHeading from "../components/SectionHeading";
import BodyText from "../components/BodyText";
import ButtonLink from "../components/ButtonLink";

const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="flex-row">
        <div className="text-container column">
          <SectionHeading
            bgVariant="light"
            nonItalics="Tukemassa kehosi"
            italics="luonnollista tasapainoa"
          />
          <BodyText bgVariant="light">
            Hellävaraista, ihmislähtöistä, näyttöön perustuvaa osteopaattista
            hoitoa koko keholle — liiku vapaammin, voi paremmin ja elä täysillä.
          </BodyText>
          <ButtonLink variant="dark" href="#varaa-aika">
            Varaa aika
          </ButtonLink>
        </div>
        <div className="home__image-container column" />
      </div>
    </div>
  );
};

export default Home;
