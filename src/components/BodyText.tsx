import "../assets/scss/body-text.scss";
import type { ComponentProps, ReactElement } from "react";

type Props = {
  bgVariant: "dark" | "medium" | "light";
} & ComponentProps<"p">;

const BodyText = ({ bgVariant, children }: Props): ReactElement => {
  return <p className={`body-text body-text--${bgVariant}`}>{children}</p>;
};

export default BodyText;
