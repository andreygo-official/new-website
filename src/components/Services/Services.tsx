import Service from "./Service";
import "./services.scss";
import { serviceData } from "./ServiceData";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   const element = servicesRef.current

    if(!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()

  }, []);


  return (
    <div className="services-container">
      <div className="container">
        <h2>Services</h2>
        <h4>Full-cycle interior design tailored to your lifestyle.</h4>
        <div id="services"
        ref={servicesRef}
        className={`row gy-4 mt-5 services-list ${
          isVisible ? "show" : ""
        }`}>
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
