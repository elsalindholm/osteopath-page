import "../assets/scss/brand-logo.scss";
import type { ReactElement } from "react";

interface Props {
  variant: "light" | "dark";
}

const BrandLogo = ({ variant }: Props): ReactElement => {
  return (
    <div className={`brand-logo brand-logo--${variant}`}>
      <span className="brand-logo__top">Osteopaatti</span>
      <span className="brand-logo__bottom">Elias Lindholm</span>
    </div>
  );
};

export default BrandLogo;
