import React from "react";
import { FaCode, FaWeight } from "react-icons/fa";

const MainİnformationDiv = () => {
  return (
    <div className="information">
      <div className="information-div">
        <div className="info">
          <div className="icon-div">
            <FaCode className="icon" />
          </div>
          <div className="info-div">
            <span>Managed Agile Teams</span>
            <p>
              Our engagement model of remote agile teams has been built and
              refined over a long period of time. You don’t just get vetted
              engineers but a proven and transparent process with a successful
              track record. They immerse themselves in your project, maintaining
              your company culture and working in line with your strategic
              goals.
            </p>
          </div>
        </div>
        <div className="info">
          <div className="icon-div">
            <FaCode className="icon" />
          </div>
          <div className="info-div">
            <span>Complex Core Development</span>
            <p>
              The traditional outsourcing model is broken and doesn’t support
              innovation and rapid change. The established vendors are built
              only to work on large-scale peripheral engineering tasks. Kodaze
              was built with the purpose of doing complex core engineering work
              in a high growth environment.
            </p>
          </div>
        </div>
        <div className="info">
          <div className="icon-div">
            <FaWeight className="icon"/>
          </div>
          <div className="info-div">
            <span>Scale Without Limits</span>
            <p>
              Our flexible global delivery center transforms your engineering
              from being bottlenecks to growth drivers. We help you to identify
              and solve the critical business challenges with proven technology
              practices that align with your customer needs and organizational
              challenges. Easily ramp up, scale and pivot quickly, with minimal
              friction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainİnformationDiv;
