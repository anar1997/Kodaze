import Layout from "../components/Layout";
import LinksArea from "../components/LinksArea";
import AboutSolution from "../components/about/AboutSolution";
import Information from "../components/about/Information";
import OurTeam from "../components/about/OurTeam";
import PromoBlocks from "../components/about/PromoBlocks";
import Cover from "../components/services/Cover";
import logo from '../img/about-img.jpg'

export default function About() {
  return (
    <Layout>
      <div>
        <div className="container">
          <LinksArea />
        </div>
        <Cover props1={'About us'} title1={'About us'} image1={logo}/>
        <AboutSolution/>
        <PromoBlocks/>
        <Information/>
        <OurTeam/>
      </div>
    </Layout>
  );
}
