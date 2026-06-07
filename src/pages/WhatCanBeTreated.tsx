import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/what-can-be-treated.scss";

const WhatCanBeTreated = (): ReactElement => {
  return (
    <div className="what-can-be-treated">
      <SectionName bgVariant="medium" text="Mitä osteopatialla voi hoitaa" />
      <SectionHeading
        bgVariant="medium"
        nonItalics="Tavoitteena edistää"
        italics="hyvinvointia ja toimintakykyä"
      />
    </div>
  );
};

export default WhatCanBeTreated;
