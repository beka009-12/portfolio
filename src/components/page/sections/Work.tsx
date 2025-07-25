"use client";
import { FC } from "react";
import scss from "./Work.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Inscription from "../../../../ui/inscription/Inscription";

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    title: "Library Osh SPU",
    description: "Personal library built with React and RTK Query.",
    image:
      "https://cdn.prod.website-files.com/5e8e816d43060db856099187/627176112f5d9547eded801e_engineer-portfolio-webflow-template.png",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/beka009-12/book",
  },
  {
    title: "Task Manager App",
    description: "Productivity app using Firebase & TypeScript.",
    image:
      "https://repository-images.githubusercontent.com/517182867/327acc25-9c2f-4d43-92c6-33eb1893439a",
    demoLink: "https://your-taskapp-demo.com",
    codeLink: "https://github.com/yourusername/task-manager",
  },
  {
    title: "E-commerce Site",
    description: "Modern shopping site with cart and filter features.",
    image:
      "https://htmlburger.com/blog/wp-content/uploads/2024/02/developer-portfolios.jpg",
    demoLink: "https://your-shop-demo.com",
    codeLink: "https://github.com/yourusername/ecommerce-site",
  },
];

const Work: FC = () => {
  return (
    <section id="works" className={scss.Work}>
      <div className="container">
        <Inscription title="03. My Works" />
        <div className={scss.box}>
          {projects.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className={scss.cards}
              >
                <div
                  className={scss.bgImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className={scss.content}>
                  <div className={scss.text}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className={scss.links}>
                    <a href={item.demoLink} target="_blank" rel="noreferrer">
                      demo
                    </a>
                    <a href={item.codeLink} target="_blank" rel="noreferrer">
                      code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
