import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/contact.scss";
import BodyText from "../components/BodyText";
import type { Language } from "../App";

interface Props {
  activeLanguage: Language;
}

const Contact = ({ activeLanguage }: Props): ReactElement => {
  return (
    <div id="yhteystiedot" className="contact">
      <div className="flex-row">
        <div className="text-container column">
          <SectionName
            bgVariant="light"
            text={
              activeLanguage === "Suomi" ? "YhteysTiedot" : "Contact details"
            }
          />
          <SectionHeading
            bgVariant="light"
            nonItalics={
              activeLanguage === "Suomi" ? "Ota yhteyttä" : "Get in touch"
            }
          />
          {activeLanguage === "Suomi" && (
            <BodyText bgVariant="light">
              Onko sinulla kysymyksiä hoitoihin liittyen? Tai ehkäpä
              urheiluseurasi tai organisaatiosi on kiinnostunut tekemään
              yhteistyötä kanssani.
            </BodyText>
          )}
          {activeLanguage === "English" && (
            <BodyText bgVariant="light">
              Do you have questions regarding osteopathic treatments? Or is your
              organisation or sports team perhaps interested in working with me?
            </BodyText>
          )}
          <div className="contact-details-container">
            <dl>
              <dt>{activeLanguage === "Suomi" ? "Puhelin" : "Mobile"}</dt>
              <dd><a href="tel:0503830767">050 383 0767</a></dd>
            </dl>
            <dl>
              <dt>{activeLanguage === "Suomi" ? "Sähköposti" : "Email"}</dt>
              <dd><a href="mailto:contact@osteopaattieliaslindholm.fi">contact@osteopaattieliaslindholm.fi</a></dd>
            </dl>
          </div>
        </div>
        <div className="contact__image-column column">
          <div className="image-container">
            <div className="contact__image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
