import { type FC } from "react";
import scss from "./Experience.module.scss";
import Skills from "../skills/Skills";

const Experience: FC = () => {
  return (
    <section id="experience" className={scss.experience}>
      <div className="container">
        <div className={scss.box}>
          <h2>Experience</h2>
          <div className={scss.experienceList}>
            <div className={scss.experienceItem}>
              <h3>Frontend Developer</h3>
              <p className={scss.company}>Personal Projects / Open Source</p>
              <p className={scss.period}>2025 — Present</p>
              <ul>
                <li>
                  Built over 10 full-featured projects using React, Next.js, and
                  TypeScript
                </li>
                <li>Developed responsive UIs and integrated real APIs</li>
                <li>
                  Worked with animations (Framer Motion), filters, carts,
                  modals, and booking systems
                </li>
                <li>
                  Published code on GitHub with clean structure and
                  documentation
                </li>
              </ul>
            </div>

            <div className={scss.experienceItem}>
              <h3>Freelance Projects</h3>
              <p className={scss.company}>Upwork / Telegram / Direct Clients</p>
              <p className={scss.period}>2024 — 2025</p>
              <ul>
                <li>Developed landing pages, web apps, and admin dashboards</li>
                <li>
                  Used React, Vite, TypeScript, JavaScript, and Next.js in
                  real-world freelance tasks
                </li>
                <li>
                  Integrated Firebase, Authentication, Redux, and REST APIs
                </li>
                <li>
                  Communicated directly with clients and handled full-cycle
                  project development
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default Experience;
