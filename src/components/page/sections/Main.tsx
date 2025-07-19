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
            <h2 className={scss.gold}>
              Turning ideas into effective web solutions
            </h2>
            <h1>From elegant frontend to backend logic, I create it all.</h1>
            <button className={scss.scrollBtn} onClick={scrollToNextSection}>
              <BiChevronDown size={32} />
              <p>Click me</p>
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
