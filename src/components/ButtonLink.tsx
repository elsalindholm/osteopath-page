import "../assets/scss/button-link.scss";
import type { ComponentProps, ReactElement } from "react";

type Props = {
  variant: "dark";
  href: string;
} & ComponentProps<"a">;

const ButtonLink = ({ variant, href, children }: Props): ReactElement => {
  return (
    <a
      className={`button-link button-link--${variant}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
