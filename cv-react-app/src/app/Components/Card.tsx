import { ReactNode } from "react";
import style from "./Projects.module.css";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
  const classes = `${style.card} ${className}`.trim();

  return <div className={classes}>{children}</div>;
};
