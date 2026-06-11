import "../assets/scss/note-card.scss";
import type { ComponentProps, ReactElement } from "react";

type Props = ComponentProps<"div">;

const NoteCard = ({ children }: Props): ReactElement => {
  return <div className="note-card">{children}</div>;
};

export default NoteCard;
