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
              : "Client-focused osteopathic treatment based on research."}
          </BodyText>
          <div className="button-container">
            <ButtonLink variant="medium" href="#varaa-aika">
              {activeLanguage === "Suomi"
                ? "Varaa aika"
                : "Book an appointment"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
