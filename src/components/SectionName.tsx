import type { ReactElement } from "react";
import "../assets/scss/section-name.scss";

type Props = {
  bgVariant: "dark" | "medium" | "light";
  text: string;
};

const SectionName = ({ bgVariant, text }: Props): ReactElement => {
  return <h2 className={`section-name section-name--${bgVariant}`}>{text}</h2>;
};

export default SectionName;
