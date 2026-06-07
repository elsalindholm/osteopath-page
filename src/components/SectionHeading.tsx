import type { ReactElement } from "react";
import "../assets/scss/section-heading.scss";
type Props = {
  bgVariant: "dark" | "medium" | "light";
  nonItalics: string;
  italics?: string;
};

const SectionHeading = ({
  bgVariant,
  nonItalics,
  italics,
}: Props): ReactElement => {
  return (
    <h3 className={`section-heading section-heading--${bgVariant}`}>
      {nonItalics}
      {italics && (
        <>
          <br />
          <span className="italics">{italics}</span>
        </>
      )}
    </h3>
  );
};

export default SectionHeading;
