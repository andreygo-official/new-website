import Service from "./Service";
import "./services.scss";
import { serviceData } from "./ServiceData";

const Services = () => {
  return (
    <div className="services-container">
      <div className="container">
        <h2>Services</h2>
        <h4>Full-cycle interior design tailored to your lifestyle.</h4>
        <div className="row gy-4 mt-5">
          {serviceData.map((service, index) => (
            <Service
            key={index}
            id={service.id}
            heading={service.heading}
            paragraph={service.paragraph}
            direction={service.direction}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
