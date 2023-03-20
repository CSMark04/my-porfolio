import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);



  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div>
          <form  action="https://formspree.io/f/xzbqazek"
  method="POST">
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="text"
              class="feedback-input"
              placeholder="Comment"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/markobonan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/CSMark04"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:markobonan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+19152779628" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>markobonan@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>915-227-9628</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
