import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/reserve-time.scss";
import BodyText from "../components/BodyText";
import ButtonLink from "../components/ButtonLink";
import type { Language } from "../App";

interface Props {
  activeLanguage: Language;
}

const ReserveTime = ({ activeLanguage }: Props): ReactElement => {
  return (
    <div id="varaa-aika" className="reserve-time">
      <SectionName
        bgVariant="dark"
        text={activeLanguage === "Suomi" ? "Varaa aika" : "Book an appointment"}
      />
      <SectionHeading
        bgVariant="dark"
        nonItalics={
          activeLanguage === "Suomi" ? "Kiinnostuitko" : "Interested in"
        }
        italics={
          activeLanguage === "Suomi"
            ? "osteopaattisesta hoidosta?"
            : "osteopathic care?"
        }
      />
      {activeLanguage === "Suomi" && (
        <BodyText bgVariant="dark">
          Teen tällä hetkellä hoitoja kotikäynteinä Helsingissä.
        </BodyText>
      )}
      {activeLanguage === "English" && (
        <BodyText bgVariant="dark">
          My appointments are currently held as home visits in Helsinki.
        </BodyText>
      )}
      <BodyText bgVariant="dark">
        {activeLanguage === "Suomi" ? "80€ / käynti" : "80€ / appointment"}
      </BodyText>
      <div className="button-container">
        <ButtonLink variant="medium" href="#yhteystiedot">
          {activeLanguage === "Suomi" ? "Varaa aika" : "Book an appointment"}
        </ButtonLink>
      </div>
    </div>
  );
};

export default ReserveTime;
