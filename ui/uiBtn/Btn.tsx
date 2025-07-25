import React, { FC } from "react";
import scss from "./Btn.module.scss";

interface ITitle {
  title: string;
}

const Btn: FC<ITitle> = ({ title }) => {
  return <button className={scss.btn}>{title}</button>;
};

export default Btn;
