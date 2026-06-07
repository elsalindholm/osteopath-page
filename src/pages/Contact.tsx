import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";

const Contact = (): ReactElement => {
  return (
    <div>
      <SectionName bgVariant="light" text="YhteysTiedot" />
      <SectionHeading bgVariant="light" nonItalics="Ota yhteyttä" />
    </div>
  );
};

export default Contact;
