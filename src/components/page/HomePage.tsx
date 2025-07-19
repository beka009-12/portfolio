import { type FC } from "react";
import scss from "./HomePage.module.scss";
import Main from "./sections/Main";
import Experience from "./sections/Experience";
import Particles from "@/animated/Particles/Particles";
import Work from "./sections/Work";

const HomePage: FC = () => {
  return (
    <div className={scss.wrapper}>
      <Particles className={scss.particles} />
      <Main />
      <Experience />
      <Work />
    </div>
  );
};

export default HomePage;
