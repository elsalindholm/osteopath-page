import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";
import "../assets/scss/reserve-time.scss";

const ReserveTime = (): ReactElement => {
  return (
    <div className="reserve-time">
      <SectionName bgVariant="dark" text="Varaa aika" />
      <SectionHeading
        bgVariant="dark"
        nonItalics="Valmis voimaan"
        italics="paremmin?"
      />
    </div>
  );
};

export default ReserveTime;
