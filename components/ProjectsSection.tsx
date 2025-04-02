import React from "react";
import PortfolioProject from "./portfolio-project";
import FeaturesSection from "./logistics-project";
import Title from "./title";

const ProjectsSection = () => {
  return <div id="projects" className="py-16 md:py-32">
    <Title />
    <FeaturesSection />
    <PortfolioProject />
  </div>;
};

export default ProjectsSection;
