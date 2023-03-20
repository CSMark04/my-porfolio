import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import pic from '../../assets/me.png'


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={pic} alt='Mark'/>
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Mark Obonan </span> and I am from{" "}
                <span className="different">
                  {" "}
                  El Paso, Texas
                </span>
                . I am a graduate from{" "}
                <span className="different">
                  Coding Temple
                </span>
                . Then I began my journey as a Freelance {" "}
                <span className="different">Software Developer</span> creating beautiful <span className="different">websites</span> for clients.
              </h4>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Creative{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Coffee Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gym-Rat{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gamer{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
