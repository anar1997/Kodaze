import Layout from "../components/Layout";
import LinksArea from "../components/LinksArea";
import MainİnformationDiv from "../components/MainİnformationDiv";
import Cover from "../components/services/Cover";
import ProfessionalSolution from "../components/services/ProfessionalSolution";
import ServiceMessage from "../components/services/ServiceMessage";
import logo from '../img/cover-img-2.jpg'


export default function Services() {
  return (
    <Layout>
      <div>
        <div className="container">
          <LinksArea />
        </div>
        <Cover props1={'Services'} title1={'Services'} image1={logo}/>
        <ServiceMessage/>
        <MainİnformationDiv/>
        <ProfessionalSolution/>
      </div>
    </Layout>
  );
}
