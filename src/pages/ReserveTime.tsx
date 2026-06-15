import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/reserve-time.scss";
import BodyText from "../components/BodyText";
import ButtonLink from "../components/ButtonLink";

const ReserveTime = (): ReactElement => {
  return (
    <div id="varaa-aika" className="reserve-time">
      <SectionName bgVariant="dark" text="Varaa aika" />
      <SectionHeading
        bgVariant="dark"
        nonItalics="Valmis voimaan"
        italics="paremmin?"
      />
      <BodyText bgVariant="dark">
        Teen tällä hetkellä hoitoja kotikäynteinä tai omasta Helsingin
        keskustassa sijaistevasta asunnostani käsin.
      </BodyText>
      <BodyText bgVariant="dark">80€ / käynti</BodyText>
      <div className="button-container">
        <ButtonLink variant="medium" href="#">
          Varaa aika
        </ButtonLink>
      </div>
    </div>
  );
};

export default ReserveTime;
