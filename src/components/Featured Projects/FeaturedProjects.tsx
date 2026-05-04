import "./featured-projects.scss";
import {projectsData} from '../Featured Projects/projects.ts'
import FeaturedProject from "./FeaturedProject.tsx";

const FeaturedProjects = () => {
  return (
    <div className="container featured-projects">
      <div className="lumen-design-studio">
        <div className="headings">
          <h1>Lumen Design Studio</h1>
          <h2>Simple, Warm, Timeless Interior</h2>
        </div>
        <button className="btn"> view projects</button>
      </div>
      <div className="projects">
        <h2>Featured Projects</h2>
        <div className="row">
         {
             projectsData.map(project => (
                 <FeaturedProject
                 key={project.id}
                 imgSrc={project.image}
                 heading={project.heading}
                 paragraph={project.paragraph}
                 />
             ))
         }
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
