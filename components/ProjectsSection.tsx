import React from "react";
import PortfolioProject from "./portfolio-project";
import LogisticsProject from "./logistics-project";
import Title from "./title";
import IphoneProject from "./iphone-project";
import MovieScanner from "./movie-scanner";

const ProjectsSection = () => {
  return <div id="projects" className="py-16 md:py-32">
    <Title />
    <MovieScanner />
    <IphoneProject />
    <PortfolioProject />
    <LogisticsProject />

  </div>;
};

export default ProjectsSection;
