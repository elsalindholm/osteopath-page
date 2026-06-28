import type { ReactElement } from "react";
import BodyText from "./BodyText";
import "../assets/scss/research-link.scss";

type Props = {
  title: string;
  authors: string;
  href: string;
};

const ResearchLink = ({ title, authors, href }: Props): ReactElement => {
  return (
    <div className="research-link">
      <a href={href} target="_blank">
        <h4>{title}</h4>
      </a>
      <BodyText bgVariant="light">{authors}</BodyText>
    </div>
  );
};

export default ResearchLink;
