import type { ComponentProps, ReactElement } from "react";
import "../assets/scss/list-card.scss";

type Props = {
  number: string;
  title: string;
} & ComponentProps<"div">;

const ListCard = ({ number, title, children }: Props): ReactElement => {
  return (
    <div className="list-card">
      <div className="row">
        <div className="left-column number">{number}</div>
        <div className="right-column title">{title}</div>
      </div>
      <div className="row">
        <div className="left-column"></div>
        <p className="right-column description">{children}</p>
      </div>
    </div>
  );
};

export default ListCard;
