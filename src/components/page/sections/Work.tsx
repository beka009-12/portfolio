"use client";
import { FC, useState } from "react";
import scss from "./Work.module.scss";

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
    image: "https://thumbs.dreamstime.com/b/river-heart-19410690.jpg",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager App",
    description: "Productivity app using Firebase & TypeScript.",
    image:
      "https://thumbs.dreamstime.com/b/hidden-paradise-near-ioannina-greece-90013025.jpg",
    demoLink: "https://your-taskapp-demo.com",
    codeLink: "https://github.com/yourusername/task-manager",
  },
  {
    title: "E-commerce Site",
    description: "Modern shopping site with cart and filter features.",
    image:
      "https://thumbs.dreamstime.com/b/fascinating-jungle-numerous-waterfalls-streams-like-fabulous-world-water-miracl-fascinating-jungle-numerous-311926255.jpg",
    demoLink: "https://your-shop-demo.com",
    codeLink: "https://github.com/yourusername/ecommerce-site",
  },
];

const Work: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="works" className={scss.Work}>
      <div className="container">
        <h2 className={scss.title}>My Works</h2>
        <div className={scss.timeline}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${scss.block} ${
                index % 2 === 0 ? scss.left : scss.right
              }`}
            >
              <div className={scss.content}>
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => handleImageClick(project.image)}
                />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={scss.links}>
                    <a
                      className={scss.Btn}
                      href={project.demoLink}
                      target="_blank"
                    >
                      Demo
                    </a>
                    <a
                      className={scss.Btn}
                      href={project.codeLink}
                      target="_blank"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className={scss.modal} onClick={closeModal}>
            <img src={selectedImage} alt="Enlarged" />
            <button className={scss.close} onClick={closeModal}>
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
