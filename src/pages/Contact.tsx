import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/contact.scss";

const Contact = (): ReactElement => {
  return (
    <div className="contact">
      <SectionName bgVariant="light" text="YhteysTiedot" />
      <SectionHeading bgVariant="light" nonItalics="Ota yhteyttä" />
    </div>
  );
};

export default Contact;
