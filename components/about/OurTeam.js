import Image from "next/image";
import logo from '../../img/our-team.jpg'

export default function OurTeam() {
  return (
    <div className="our-team">
      <div className="div-1">
        <div className="img-div">
          <Image className="img" src={logo}/>
        </div>

        <div className="info">
          <span>Our team</span>
          <p>
            Our team of experienced developers combines cutting-edge technology
            with a passion for delivering customized solutions that meet your
            unique business needs, including ERP and CRM software services.
            We've been helping businesses just like yours bring their software
            visions to life. Our commitment to quality, transparency, and
            customer satisfaction sets us apart and has earned us a reputation
            as a trusted partner for custom software development, including ERP
            and CRM solutions. At KODAZE, we're more than just a software
            development company. We're a partner in your success. Contact us
            today to learn how we can help you bring your software vision to
            life, including implementing a custom ERP or CRM solution for your
            business."
          </p>
        </div>
      </div>
    </div>
  );
}
