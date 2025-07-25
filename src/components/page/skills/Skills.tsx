import { FC } from "react";
import scss from "./Skills.module.scss";
import Inscription from "../../../../ui/inscription/Inscription";

interface Tech {
  name: string;
  icon: string;
}

const techList: Tech[] = [
  { name: "Next.js", icon: "nextjs" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Sass", icon: "sass" },
  { name: "Framer Motion", icon: "framermotion" },
  { name: "GitHub", icon: "github" },
  { name: "Git", icon: "git" },
  { name: "Firebase", icon: "firebase" },
  { name: "React", icon: "react" },
  { name: "React Router", icon: "reactrouter" },
  { name: "VS Code", icon: "vscode" },
  { name: "HTML5", icon: "html5" },
  { name: "Vite", icon: "vitejs" },
];

const Skills: FC = () => {
  return (
    <div className={scss.skillsSection}>
      <div className="container">
        <Inscription title="Skills" />
        <div className={scss.skills}>
          {techList.map((tech) => (
            <div
              key={tech.name}
              className={scss.skillCard}
              data-name={tech.name}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
