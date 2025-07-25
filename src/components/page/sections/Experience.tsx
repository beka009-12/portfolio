"use client";
import { FC } from "react";
import scss from "./Experience.module.scss";
import { motion } from "framer-motion";
import Inscription from "../../../../ui/inscription/Inscription";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  linkCompany: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2024",
    title: "Frontend Developer",
    linkCompany: "",
    company: "Creative Agency",
    description:
      "Developed interactive user interfaces with React, GSAP and Tailwind. Led animations and performance optimization.",
  },
  {
    year: "2023",
    title: "Intern Developer",
    linkCompany: "",
    company: "TechHub",
    description:
      "Assisted in building e-commerce platforms and learned best practices for scalable UI architecture.",
  },
  {
    year: "2022",
    title: "Freelancer",
    linkCompany: "",
    company: "Remote",
    description:
      "Worked with local startups to build landing pages and small web apps using modern technologies.",
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className={scss.Experience}>
      <div className="container">
        <Inscription title="02. My Experience" />
        <div className={scss.timeline}>
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className={`${scss.card} ${
                index % 2 === 0 ? scss.left : scss.right
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className={scss.year}>{item.year}</span>
              <div className={scss.content}>
                <h3>
                  {item.title} <a href="">@{item.company}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
