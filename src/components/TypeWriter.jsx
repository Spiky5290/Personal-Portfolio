import React from "react";
import { TypeAnimation } from "react-type-animation";


const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "I am Aniket",
        2000, 
        "A Web Developer",
        2000,
        "AI/ML Enthusiast",
        2000,
        "Learner",
        2000,
      ]}
      wrapper="span"
      speed={150}
      deletionSpeed={130}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
