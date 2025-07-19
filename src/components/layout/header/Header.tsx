"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Image from "next/image";
import { link } from "@/constants/Links";
import logo from "../../../../public/logo5.png";

const Header: FC = () => {
  const [activeId, setActiveId] = useState<string>("");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = "";
      const offset = 200; // на сколько пикселей выше секции считать её активной

      for (const item of link) {
        const id = item.href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top < offset) {
            currentSectionId = id;
          }
        }
      }

      if (currentSectionId !== activeId) {
        setActiveId(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // на случай, если пользователь уже не вверху
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Image src={logo} alt="Logo" />
          <nav>
            {link.map((item, index) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <p
                  key={index}
                  className={`${scss.path} ${isActive ? scss.active : ""}`}
                  onClick={() => scrollToId(id)}
                >
                  {String(index + 1).padStart(2, "0")}. {item.title}
                </p>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
