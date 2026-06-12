import type { ReactElement } from "react";
import "../assets/scss/home.scss";
import SectionHeading from "../components/SectionHeading";
import BodyText from "../components/BodyText";
import ButtonLink from "../components/ButtonLink";

const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="text-container">
        <SectionHeading
          bgVariant="light"
          nonItalics="Tukemassa kehosi"
          italics="luonnollista tasapainoa"
        />
        <BodyText bgVariant="light">
          Hellävaraista, ihmislähtöistä, näyttöön perustuvaa osteopaattista
          hoitoa koko keholle — liiku vapaammin, voi paremmin ja elä täysillä.
        </BodyText>
        <ButtonLink variant="dark" href="#">
          Varaa aika
        </ButtonLink>
      </div>
      <div className="image-container">Image side</div>
    </div>
  );
};

export default Home;
