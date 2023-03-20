import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiChakraui,
  SiReact,
  SiFirebase,
  SiCss3,
  SiNetlify
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import fitCentral from '../../assets/fitCentral.PNG'
import clipped from '../../assets/clipped1.PNG'
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={fitCentral}
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>FitCentral</h2>
                <p>
                FitCentral is a comprehensive fitness website that I built using MaterialUI, React, JS, HTML, and CSS. It features various tools such as workout and diet planners, as well as calculators for BMI and calorie tracking.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiNetlify />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://fitcentral.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/CSMark04/FitCentral"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={clipped}
                    style={{height: '100%'}}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Clip-It</h2>
                <p>
                Clip-It is a dynamic and engaging website that I created using a combination of powerful tools including JavaScript, Firebase, Firestore, JSX, React, and Chakra UI. 
                The website allows users to post their favorite in-game clips and share them with their friends.  </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiReact />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://clip-it-c3d32.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/CSMark04/Clip-It"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
      
    </>
  );
};
