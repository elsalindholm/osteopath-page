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
      <h4>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h4>
      <BodyText bgVariant="light">{authors}</BodyText>
    </div>
  );
};

export default ResearchLink;
