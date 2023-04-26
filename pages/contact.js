import Layout from "../components/Layout";
import LinksArea from "../components/LinksArea";
import FormInputs from "../components/contact/FormInputs";
import Message from "../components/contact/Message";
import Cover from "../components/services/Cover";
import logo from '../img/cover-img-2.jpg'

export default function Contact() {
  return (
    <Layout>
      <div>
        <div className="container">
          <LinksArea />
        </div>
        <Cover props1={'Contact us'} title1={'Contact us'} image1={logo}/>
        <Message/>
        <FormInputs/>
      </div>
    </Layout>
  );
}
