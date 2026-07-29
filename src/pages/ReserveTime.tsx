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
        <>
          <BodyText bgVariant="dark">
            Vastaanottoni on auki tiistaisin ja torstaisin Albertinkatu 17:ssa.
          </BodyText>
          <BodyText bgVariant="dark">
            Elo-, syys- ja lokakuussa saat ensimmäisen käyntisi tarjoushintaan
            10% alennuksella (72€ / käynti). Tarjoushinta huomioidaan maksun
            yhteydessä.
          </BodyText>
        </>
      )}
      {activeLanguage === "English" && (
        <>
          <BodyText bgVariant="dark">
            My practice is open on Tuesdays and Thursdays at Albertinkatu 17.
          </BodyText>
          <BodyText bgVariant="dark">
            Get 10% off your first appointment (72€ / appointment), for your
            booking in August, September or October. You will be charged the
            discounted amount at the end of your appointment.
          </BodyText>
        </>
      )}
      <BodyText bgVariant="dark">
        {activeLanguage === "Suomi"
          ? "Normaali hinta 80€ / käynti"
          : "Normal price 80€ / appointment"}
      </BodyText>
      <div className="button-container">
        <ButtonLink
          variant="medium"
          href={
            activeLanguage === "Suomi"
              ? "https://nettivaraus6.ajas.fi/fi/df02223c9d93"
              : "https://nettivaraus6.ajas.fi/en/df02223c9d93"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {activeLanguage === "Suomi" ? "Varaa aika" : "Book an appointment"}
        </ButtonLink>
      </div>
    </div>
  );
};

export default ReserveTime;
