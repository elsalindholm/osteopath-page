import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/about-me.scss";

const AboutMe = (): ReactElement => {
  return (
    <div className="about-me">
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
