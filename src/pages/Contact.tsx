import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/contact.scss";
import BodyText from "../components/BodyText";

const Contact = (): ReactElement => {
  return (
    <div id="yhteystiedot" className="contact">
      <div className="flex-row">
        <div className="column">
          <SectionName bgVariant="light" text="YhteysTiedot" />
          <SectionHeading bgVariant="light" nonItalics="Ota yhteyttä" />
          <BodyText bgVariant="light">
            Onko sinulla kysymyksiä hoitoihin liittyen? Tai ehkäpä
            urheiluseurasi tai organisaatiosi on kiinnostunut tekemään
            yhteistyötä kanssani.
          </BodyText>
          <div className="contact-details-container">
            <dl>
              <dt>Puhelin</dt>
              <dd>050 383 0767</dd>
            </dl>
            <dl>
              <dt>Sähköposti</dt>
              <dd>contact@osteopaattieliaslindholm.fi</dd>
            </dl>
          </div>
        </div>
        <div className="column">
          <div className="image-container">
            <img src="images/contact2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
