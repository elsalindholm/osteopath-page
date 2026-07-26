import type { ReactElement, ReactNode } from "react";
import "../assets/scss/legal-section-body.scss";

type Props = {
  children: ReactNode;
};

const LegalSectionBody = ({ children }: Props): ReactElement => {
  return <div className="legal-section-body">{children}</div>;
};

export default LegalSectionBody;
