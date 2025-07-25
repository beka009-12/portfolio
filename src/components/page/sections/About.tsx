import { type FC } from "react";
import scss from "./About.module.scss";
import ScrambledText from "@/animated/gsap/ScrambleText";
import TiltedCard from "@/animated/ProfileCard/TiltedCard";

const About: FC = () => {
  const photo = {
    photo:
      "https://www.shutterstock.com/image-vector/shocked-cat-pixel-art-meme-600nw-2476146921.jpg",
  };
  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.content}>
            <div className={scss.right}>
              <div className={scss.text}>
                <p>hello, my name is</p>
                <h2>Nurmamitov Bekbol</h2>
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
              <TiltedCard
                imageSrc={photo.photo}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="@beka_ty"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={true}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p
                    style={{ color: "black" }}
                    className="tilted-card-demo-text"
                  >
                    Hello!
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
