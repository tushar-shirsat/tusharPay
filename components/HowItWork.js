import { useState } from "react";
import workapi from "../api/workapi";

function HowItWork() {
  const [workData, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((curElem) => (
              <>
                <div
                  className="col-12 col-lg-4 text-center work-container-subdiv"
                  key={curElem.id}
                >
                  <i className={`fontawesome-style ${curElem.logo}`}></i>
                  <h2 className="sub-heading">{curElem.title}</h2>
                  <p className="main-hero-para w-100">{curElem.info}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWork;
