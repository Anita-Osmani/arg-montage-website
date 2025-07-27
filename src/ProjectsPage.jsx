import React from "react";
import ProjectSlider from "./ProjectSlider";

const ProjectsPage = () => {
  return (
    <div className="py-20" style={{ backgroundColor: "#E8E3DD" }}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#492D25" }}>
          Découvrez notre savoir-faire
        </h2>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: "#724935" }}>
          Chaque détail a son importance dans le résultat final – et nous sommes là pour que chaque détail se voie, fonctionne et dure dans le temps.


        </p>
      </div>

      <ProjectSlider />
    </div>
  );
};

export default ProjectsPage;
