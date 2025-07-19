import { FC } from "react";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import scss from "./Contact.module.scss";

const Contact: FC = () => {
  return (
    <section id="contact" className={scss.Contact}>
      <div className={scss.starField}></div>
      <div className={scss.glowOrb}></div>
      <div className={scss.container}>
        <div className={scss.crystal}>
          <h2 className={scss.title}>Enter the Portal</h2>
          <p className={scss.subtitle}>A message here can open new worlds</p>

          <div className={scss.info}>
            <div>
              <Mail /> <a href="mailto:you@example.com">you@example.com</a>
            </div>
            <div>
              <Phone /> <a href="tel:+996700000000">+996 700 000 000</a>
            </div>
            <div>
              <Github /> <a href="https://github.com/beka009-12">GitHub</a>
            </div>
            <div>
              <Linkedin />{" "}
              <a href="https://www.linkedin.com/in/beka-dev-809835375/">
                LinkedIn
              </a>
            </div>
            <div>
              <MapPin /> <span>Bishkek / Remote</span>
            </div>
          </div>

          <button className={scss.sendBtn}>✨ Send a Signal</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
