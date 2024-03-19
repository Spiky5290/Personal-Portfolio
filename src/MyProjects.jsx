import React from "react";
import "./fonts.css";

const MyProjects = () => {
  return (
    <div className="my-10">
      <div className="flex ubuntu-bold text-6xl md:pl-8 md:m-5 justify-center md:justify-start">My Projects</div>
      <div className="my-24 mx-10">
        <div class="card w-full bg-base-200 shadow-xl justify-center">
          <div class="card-body items-center">
            <div class="flex card-actions justify-center "></div>
            <p className="text-4xl w-fit dm-sans-light">Soon Coming Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
