import { type FC } from "react";
import scss from "./HomePage.module.scss";
import Main from "./sections/Main";
import Experience from "./sections/Experience";
import Particles from "@/animated/Particles/Particles";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import SocialIcons from "./SocialIcons/SocialIcons";
import Skills from "./skills/Skills";

const HomePage: FC = () => {
  return (
    <div className={scss.wrapper}>
      <Particles className={scss.particles} />
      <SocialIcons />
      <Main />
      <Experience />
      {/* <Skills /> */}
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
