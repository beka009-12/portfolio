import { type FC } from "react";
import scss from "./Contact.module.scss";
import Inscription from "../../../../ui/inscription/Inscription";

const Contact: FC = () => {
  return (
    <section id="contact" className={scss.Contact}>
      <div className="container">
        <Inscription title="04. Contact " />
        <div className={scss.formBox}>
          <form className={scss.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={6} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
