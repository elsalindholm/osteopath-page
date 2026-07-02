import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/what-can-be-treated.scss";
import BodyText from "../components/BodyText";
import ListCard from "../components/ListCard";
import {
  TreatmentListItems,
  TreatmentListItemsEng,
} from "../utilities/TreatmentList";
import type { Language } from "../App";

interface Props {
  activeLanguage: Language;
}

const WhatCanBeTreated = ({ activeLanguage }: Props): ReactElement => {
  const treatmentListItems =
    activeLanguage === "Suomi" ? TreatmentListItems : TreatmentListItemsEng;

  return (
    <div id="hoito" className="what-can-be-treated">
      <SectionName
        bgVariant="medium"
        text={
          activeLanguage === "Suomi"
            ? "Mitä osteopatialla voi hoitaa"
            : "What can be treated with osteopathy"
        }
      />
      <SectionHeading
        bgVariant="medium"
        nonItalics={
          activeLanguage === "Suomi"
            ? "Tavoitteena edistää"
            : "The aim to promote "
        }
        italics={
          activeLanguage === "Suomi"
            ? "hyvinvointia ja toimintakykyä"
            : "well-being and functional capacity"
        }
      />
      <BodyText bgVariant="light">
        {activeLanguage === "Suomi"
          ? "Osteopatiasta on tutkitusti hyötyä moniin erilaisiin tuki- ja liikuntaelimistön kipuihin ja liikerajoituksiin. Alla muutamia yleisimpiä syitä osteopaatille hakeutumiselle."
          : "Research has proven osteopathy to be helpful in many different cases of musculoskeletal pain or restriction of movement. Below you can find some of the most usual reasons for osteopathic treatment."}
      </BodyText>
      <div className="list-container">
        {treatmentListItems.map((item) => (
          <ListCard key={item.number} number={item.number} title={item.title}>
            {item.description}
          </ListCard>
        ))}
      </div>
    </div>
  );
};

export default WhatCanBeTreated;
