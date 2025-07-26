"use client";
import { FC, useRef } from "react";
import scss from "./Main.module.scss";
import { BiChevronDown } from "react-icons/bi";
import About from "./About";

const Main: FC = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={scss.Main}>
        <div className="container">
          <div className={scss.content}>
            <h2 className={scss.gold}>Hello, I'm Bekbol</h2>
            <h1 className={scss.title}>
              Frontend Developer & <br /> UI Designer
            </h1>
            <p className={scss.subtitle}>
              Frontend developer & UI designer, creating stunning digital
              interfaces
            </p>
            <button
              className={scss.scrollBtn}
              onClick={scrollToNextSection}
              aria-label="Scroll to about section"
            >
              <BiChevronDown size={40} className={scss.icon} />
              <span className={scss.scrollText}>Scroll down</span>
            </button>
          </div>
        </div>
      </section>

      <div ref={nextSectionRef} className={scss.nextSection}>
        <About />
      </div>
    </>
  );
};

export default Main;
