import { type FC } from "react";
import scss from "./Inscription.module.scss";

interface ITitle {
  title: string;
}

const Inscription: FC<ITitle> = ({ title }) => {
  return (
    <div className={scss.title}>
      <h1>{title}</h1>
    </div>
  );
};

export default Inscription;
