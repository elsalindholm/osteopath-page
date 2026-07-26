import type { ReactElement } from "react";
import "../assets/scss/body-text.scss";

type Props = {
  number: number;
  children: string;
};

const LegalSectionHeading = ({ number, children }: Props): ReactElement => {
  return (
    <p className="body-text body-text--light">
      <strong>
        {number}. {children}
      </strong>
    </p>
  );
};

export default LegalSectionHeading;
