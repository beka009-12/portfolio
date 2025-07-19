import LayoutSite from "@/components/layout/LayoutSite";
import { ReactNode, type FC } from "react";

interface ILay {
  children: ReactNode;
}

const layout: FC<ILay> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
