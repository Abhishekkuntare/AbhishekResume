import React from "react";
import "./Projects.css";
import Data from "../../../data.json";

const Projects = () => {
  return (
    <div className="projects">
      {Data &&
        Data.map((data) => {
          return (
            <div key={data.id}>
              <i>{data.name}</i>
              <b>{data.email}</b>
              <strong>{data.passion}</strong>
              <p>{data.vibes}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
