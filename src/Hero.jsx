import React, { useState } from "react";
import DropdownItem from "./components/DropdownItem";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import avatar from "./images/my-avatar.jpg";
import TypeWriter from "./components/TypeWriter";

const Hero = () => {
  const [currColor, setColor] = useState("")
  const[mouse, setMouse] = useState(false)
  
  const changeColor = () => {
    if(!mouse){
      setColor("6e5494")
      setMouse(!mouse)
    }
    else{
      setColor("")
      setMouse(!mouse)
    }
  }


  return (
    <div className="p-5" name="to_hero">
      <div
        className="hero md:min-h-[60vh] rounded-[25px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay rounded-[25px] bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div class="avatar">
              <div class="w-24 mask mask-squircle mb-5 md:m-7">
                <img src={avatar} alt="Avatar" />
              </div>
            </div>
            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
            <TypeWriter />
            <div className="mt-5" />
            <button className="btn btn-primary">Get Started</button>
            <div className="flex w-100% justify-center mt-5" onMouseEnter={changeColor} onMouseLeave={changeColor}>
              <DropdownItem
                link="https://github.com/Spiky5290"
                icon={faGithub}
                size="3x"
                style = {{color: currColor}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
