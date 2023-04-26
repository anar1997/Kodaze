import Image from "next/image";
import logo from '../../img/business-man.jpg'

export default function Information() {
  return (
    <div className="information-1">
      <div className="info">
        <div className="info-div">
          <span>Who we are?</span>
          <p>
            We are fully functional, robust and scalable CRM and ERP
            applications which focuses on preparation and programming service
            provider we are a company. Our main goal is you resource utilization
            with an appropriate budget for quality that maximizes is to develop
            applications. We are a fully functional, robust and scalable CRM and
            ERP application development and programming service company. KODAZE
            is your one-stop software development center that provides
            professional and efficient services to turn your ideas into
            successful products.
          </p>
        </div>
        <div className="img-div">
            <Image className="img" src={logo}/>
        </div>
      </div>
    </div>
  );
}
