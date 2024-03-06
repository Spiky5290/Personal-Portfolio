import React from "react";
import "./fonts.css";
import "./App.css";

const AboutMe = () => {
  return (
    <div className="mb-20" id="about_me">
      <div className="flex pl-8 m-5 ubuntu-bold">
          <h1 className="mb-5 text-6xl u">About Me</h1>
      </div>
      <div className=" ml-32 ubuntu-light">
        <p className="about--info text-lg">
          <ul className="space-y-2">
            <li>
              🎓 I'm a final year student pursuing Bachelors of Technology in
              Computer Science and Engineering at Amity University.
            </li>
            <li>
              💼 Full-stack developer creating seamless and engaging web
              experiences.
            </li>
            <li>🌟 Experienced in both front-end and back-end technologies.</li>
            <li>
              🚀 Proficient in ReactJS and passionate about building interactive
              web applications across the entire stack.
            </li>
            <li>
              📚 Continuous learner with a keen interest in staying updated with
              the latest tech trends.
            </li>
            <li>
              🌈 Enjoy creating intuitive and visually appealing user
              experiences.
            </li>
            <li>
              🎮 Outside coding, I love watching anime, reading books and
              exploring new places.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
