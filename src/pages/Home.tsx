import type { ReactElement } from "react";
import "../assets/scss/home.scss";
import SectionHeading from "../components/SectionHeading";
import BodyText from "../components/BodyText";
import ButtonLink from "../components/ButtonLink";
import type { Language } from "../App";
import SectionName from "../components/SectionName";

interface Props {
  activeLanguage: Language;
}

const Home = ({ activeLanguage }: Props): ReactElement => {
  return (
    <div id="home" className="home">
      <div className="filter"></div>
      <div className="home__flex-row">
        <div className="text-container">
          <SectionName
            bgVariant="dark"
            text={
              activeLanguage === "Suomi"
                ? "Rekisteröity osteopaatti · pääkaupunkiseutu"
                : "Registered osteopath · Greater helsinki"
            }
          ></SectionName>
          <SectionHeading
            bgVariant="dark"
            nonItalics={
              activeLanguage === "Suomi"
                ? "Tukemassa kehosi"
                : "Supporting your body's"
            }
            italics={
              activeLanguage === "Suomi"
                ? "luonnollista tasapainoa"
                : "natural balance"
            }
          />
          <BodyText bgVariant="dark">
            {activeLanguage === "Suomi"
              ? "Hellävaraista, ihmislähtöistä, näyttöön perustuvaa osteopaattista hoitoa koko keholle."
              : "Client-based osteopathic treatment based on research."}
          </BodyText>
          <div className="button-container">
            <ButtonLink variant="medium" href="#varaa-aika">
              {activeLanguage === "Suomi"
                ? "Varaa aika"
                : "Book an appointment"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
