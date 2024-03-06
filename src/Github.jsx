import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css"

function Github() {
  return (
    <div className="github">
      <h2 className="text-3xl">
        My <strong>Github</strong> Calender
      </h2>
      <GitHubCalendar
        username="Spiky5290"
        blockSize={15}
        blockMargin={5}
        colorScheme="light"
      />
    </div>
  );
}

export default Github;