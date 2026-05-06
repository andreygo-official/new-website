import type { ServiceType } from "./ServiceData"

const Service = ({id, heading, paragraph, direction}: ServiceType) => {
  return (
    <div className="one-card col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">0{id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {heading}
                </h6>
                <p className="card-text">
                  {paragraph}
                </p>
                <a className="card-link">
                  {direction}
                </a>
              </div>
            </div>
          </div>
  )
}

export default Service
