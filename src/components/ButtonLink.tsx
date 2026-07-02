import "../assets/scss/button-link.scss";
import type { ComponentProps, ReactElement } from "react";

type Props = {
  variant: "medium";
  href: string;
} & ComponentProps<"a">;

const ButtonLink = ({ variant, href, children, ...rest }: Props): ReactElement => {
  return (
    <a
      className={`button-link button-link--${variant}`}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
