import { FaTelegramPlane, FaGithub, FaInstagram } from "react-icons/fa";
import scss from "./SocialIcons.module.scss";

const SocialIcons = () => {
  const socials = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      link: "https://web.telegram.org/k/#@bekbol_2009",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/yourusername",
    },
  ];

  return (
    <div className={scss.socialIcons}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={scss.iconLink}
        >
          <div className={scss.iconWrapper}>{social.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
