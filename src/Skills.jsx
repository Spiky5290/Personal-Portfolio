import React, { useState } from "react";
import "./Skills.css";
import "./fonts.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiCplusplus,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import Github from "./Github";
import LeetCode from "./LeetCode";

function Skills() {
  return (
    <div id="skills">
      <div className="flex justify-center md:pl-8 md:m-5 md:justify-start">
        <h1 className="text-6xl ubuntu-bold">Skills<p className="hidden md:block">and Technologies</p></h1>
      </div>
      <div>
        <div className="skill--card justify-center skill--item--dark">
          <div className="skill--item">
            <SiHtml5 size="5rem" />
            <p>HTML</p>
          </div>
          <div className="skill--item">
            <SiCss3 size="5rem" />
            <p>CSS</p>
          </div>
          <div className="skill--item">
            <SiJavascript size="5rem" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill--item">
            <SiReact size="5rem" />
            <p>REACT</p>
          </div>
          <div className="skill--item">
            <SiNextdotjs size="5rem" />
            <p>NEXTJS</p>
          </div>
          <div className="skill--item">
            <SiNodedotjs size="5rem" />
            <p>NODEJS</p>
          </div>
          <div className="skill--item">
            <SiExpress size="5rem" />
            <p>EXPRESS</p>
          </div>
          <div className="skill--item">
            <SiMysql size="5rem" />
            <p>MY SQL</p>
          </div>
          <div className="skill--item">
            <SiPython size="5rem" />
            <p>PYTHON</p>
          </div>
          <div className="skill--item">
            <SiGit size="5rem" />
            <p>GIT</p>
          </div>
          <div className="skill--item">
            <SiGithub size="5rem" />
            <p>GITHUB</p>
          </div>
          <div className="skill--item">
            <SiTailwindcss size="5rem" />
            <p>TAILWIND CSS</p>
          </div>
          <div className="skill--item">
            <SiMui size="5rem" />
            <p>MATERIAL UI</p>
          </div>
          <div className="skill--item">
            <SiBootstrap size="5rem" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skill--item">
            <SiPostman size="5rem" />
            <p>POSTMAN</p>
          </div>
          <div className="skill--item">
            <SiVisualstudiocode size="5rem" />
            <p>VS CODE</p>
          </div>
          <div className="skill--item">
            <SiCplusplus size="5rem" />
            <p>C++</p>
          </div>
        </div>
        <div className="flex w-full justify-center mb-10">
          <div className="hidden lg:block w-fit pl-10 pr-10 pb-10 bg-white dark:dark:bg-slate-900 rounded-xl" data-theme="dark">
            <Github />
          </div>
        </div>
        <div className="flex w-full justify-center mb-10">
          <LeetCode />
        </div>
      </div>
    </div>
  );
}

export default Skills;
