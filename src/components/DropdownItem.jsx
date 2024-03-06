import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank"  rel="noopener noreferrer">
        <div className="flex-none items-center">
          <div>
            <FontAwesomeIcon
              size={props.size}
              icon={props.icon}
              style={props.style}
            />
          </div>
          <div>
            <p>{props.text}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DropdownItem;
