import { Github, Instagram, Linkedin } from "lucide-react";
import styles from "./SocialIcons.module.scss";
import { FaTelegramPlane } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://github.com/beka009-12/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className={styles.icons} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className={styles.icons} />
      </a>
      <a href="mailto:youremail@example.com">
        <Instagram className={styles.icons} />
      </a>
      <a href="mailto:youremail@example.com">
        <FaTelegramPlane className={styles.icons} />
      </a>
    </div>
  );
};

export default SocialIcons;
