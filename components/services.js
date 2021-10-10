import { useState } from "react";
import serviceapi from "../api/service-api";

const Services = () => {
    const [serviceData, setServiceData] = useState(serviceapi)
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money?
          </h1>
          <div className="row">
              {
                  serviceData.map(({id,title,info,logo}) =>(
                <>
                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                <i className={`fontawesome-style ${logo}`}></i>
                <h3 className="sub-heading">{title}</h3>
                <p className="main-hero-para">{info}</p>
                </div>
                </>
  ))
              }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
