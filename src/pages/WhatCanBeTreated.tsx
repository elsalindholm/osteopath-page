import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/what-can-be-treated.scss";
import BodyText from "../components/BodyText";
import ListCard from "../components/ListCard";
import { TreatmentListItems } from "../utilities/TreatmentList";

const WhatCanBeTreated = (): ReactElement => {
  return (
    <div id="hoito" className="what-can-be-treated">
      <SectionName bgVariant="medium" text="Mitä osteopatialla voi hoitaa" />
      <SectionHeading
        bgVariant="medium"
        nonItalics="Tavoitteena edistää"
        italics="hyvinvointia ja toimintakykyä"
      />
      <BodyText bgVariant="light">
        Osteopatiasta on tutkitusti hyötyä moniin erilaisiin tuki- ja
        liikuntaelimistön kipuihin ja liikerajoituksiin. Alla muutamia
        yleisimpiä syitä osteopaatille hakeutumiselle.
      </BodyText>
      <div className="list-container">
        {TreatmentListItems.map((item) => (
          <ListCard number={item.number} title={item.title}>
            {item.description}
          </ListCard>
        ))}
      </div>
    </div>
  );
};

export default WhatCanBeTreated;
