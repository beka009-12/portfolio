import React, { FC } from "react";
import StarBorder from "./StarBorder/StarBorder";

interface ITitle {
  title: string;
}

const Btn: FC<ITitle> = ({ title }) => {
  return (
    <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
      {title}
    </StarBorder>
  );
};

export default Btn;
