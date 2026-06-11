import "../assets/scss/button-link.scss";
import type { ReactElement } from "react";

type Props = {
  variant: "dark";
  text: string;
  href: string;
};

const ButtonLink = ({ variant, text, href }: Props): ReactElement => {
  return (
    <a
      className={`button-link button-link--${variant}`}
      href={href}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default ButtonLink;
