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
        nonItalics={activeLanguage === "Suomi" ? "Valmis voimaan" : "Ready to"}
        italics={activeLanguage === "Suomi" ? "paremmin?" : "feel better?"}
      />
      {activeLanguage === "Suomi" && (
        <BodyText bgVariant="dark">
          Teen tällä hetkellä hoitoja kotikäynteinä tai omasta Helsingin
          keskustassa sijaistevasta asunnostani käsin.
        </BodyText>
      )}
      {activeLanguage === "English" && (
        <BodyText bgVariant="dark">
          My appointments are currently held either as home visits or at my
          apartment in central Helsinki.
        </BodyText>
      )}
      <BodyText bgVariant="dark">
        {activeLanguage === "Suomi" ? "80€ / käynti" : "80€ / appointment"}
      </BodyText>
      <div className="button-container">
        <ButtonLink variant="medium" href="#">
          {activeLanguage === "Suomi" ? "Varaa aika" : "Book an appointment"}
        </ButtonLink>
      </div>
    </div>
  );
};

export default ReserveTime;
