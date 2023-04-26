import Image from "next/image";
import { FaSwatchbook, FaUsers } from "react-icons/fa";
import logo from '../../img/office-assistant.jpg'

export default function AboutSolution() {
  return (
    <div className="about-solution">
      <div className="solution">
        <span className="span">
          Get's IT Solutions For
          <br />
          Expert Consultants
        </span>
        <p className="p">
          We are fully functional, robust and scalable CRM and ERP applications
          which focuses on preparation and programming service providers.
        </p>
        <div className="parts">
          <div className="part">
            <div className="icon-div">
              <FaUsers className="icon" />
            </div>
            <div className="info">
              <span>Professional Consultants</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>

          <div className="part">
            <div className="icon-div">
              <FaSwatchbook className="icon" />
            </div>
            <div className="info">
              <span>Designing some pages</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-div">
        <Image src={logo} className="img" />
      </div>
    </div>
  );
}
