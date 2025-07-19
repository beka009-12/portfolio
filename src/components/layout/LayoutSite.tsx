import { ReactNode, type FC } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Particles from "@/animated/Particles/Particles";

interface Lay {
  children: ReactNode;
}

const LayoutSite: FC<Lay> = ({ children }) => {
  return (
    <div className={scss.Layout}>
      <div className={scss.bg}></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
