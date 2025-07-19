import { type FC } from "react";
import scss from "./About.module.scss";
import ScrambledText from "@/animated/gsap/ScrambleText";

const About: FC = () => {
  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.content}>
            <div className={scss.right}>
              <div className={scss.text}>
                <p>hello, my name is</p>
                <h2>Uiio Uiio</h2>
              </div>
              <ScrambledText
                className="scrambled-text-demo"
                radius={50}
                duration={1.1}
                speed={0.5}
                scrambleChars=".:"
              >
                I'm a frontend developer with a passion for design and <br />{" "}
                detail. I create modern, responsive interfaces using HTML, CSS,{" "}
                <br />
                JavaScript, React, and TypeScript.
                <span className={scss.text_divider}></span>I love turning ideas
                into clean, interactive user <br /> experiences — from smooth
                animations to intuitive layouts.
                <span className={scss.text_divider}></span>
                Currently, I'm exploring advanced animations with GSAP, <br />
                Framer-Motion and improving my UI/UX design skills. <br /> I
                believe in writing readable, scalable code and staying updated
                with the latest trends in frontend development.
              </ScrambledText>
            </div>
            <div className={scss.left}>
              <img
                src="https://png.pngtree.com/recommend-works/png-clipart/20240516/ourmid/pngtree-cat-with-glasses-meme-sticker-tshirt-illustration-png-image_12476682.png"
                alt="me"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
