import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";

const AboutMe = (): ReactElement => {
  return (
    <div>
      <SectionName bgVariant="light" text="Minusta" />
      <SectionHeading
        bgVariant="light"
        nonItalics="Kokonaisvaltainen lähestymistapa
"
        italics="pysyvään helpotukseen"
      />
    </div>
  );
};

export default AboutMe;
