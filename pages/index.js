import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import { FooterLogo } from "../svg";
import LinksArea from "../components/LinksArea";
import MainCover from "../components/MainCover";
import MainHelpDiv from "../components/MainHelpDiv";
import MainİnformationDiv from "../components/MainİnformationDiv";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="container">
          <LinksArea />
        </div>
        <MainCover />
        <MainHelpDiv />
        <MainİnformationDiv />
      </div>
    </Layout>
  );
}
