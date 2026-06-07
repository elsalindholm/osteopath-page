import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";

const WhatCanBeTreated = (): ReactElement => {
  return (
    <div>
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
