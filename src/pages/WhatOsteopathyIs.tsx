import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";

const WhatOsteopathyIs = (): ReactElement => {
  return (
    <div>
      <SectionName bgVariant="dark" text="Mitä osteopatia on" />
      <SectionHeading
        bgVariant="dark"
        nonItalics="Paljon muutakin"
        italics="kuin selkäkivun hoitoa"
      />
    </div>
  );
};

export default WhatOsteopathyIs;
