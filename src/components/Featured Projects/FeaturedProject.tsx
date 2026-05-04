type FeaturedProjectProps = {
    imgSrc: string;
    heading: string;
    paragraph: string
  };

import './featured-projects.scss'
const FeaturedProject = ({imgSrc, heading, paragraph}: FeaturedProjectProps) => {
  return (
    <div className="project-col col-md-12 col-lg-4">
      <div className="project">
        <img src={imgSrc} className="project-img-top" alt="project-one" />
        <div className="project-body">
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
