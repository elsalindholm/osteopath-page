import type { ReactElement } from "react";
import SectionHeading from "../components/SectionHeading";
import SectionName from "../components/SectionName";

const ReserveTime = (): ReactElement => {
  return (
    <div>
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
