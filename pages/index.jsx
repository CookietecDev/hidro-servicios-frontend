import React from "react";
import CardsCategories from "../components/containers/CardsCategories";
import CardsServices from "../components/containers/CardsServices";
import BannerContact from "../components/elements/BannerContact";
import CardsRepresentations from "../components/containers/CardsRepresentations/index";
import Footer from "../components/ui/Footer";
import BannerHome from "../components/elements/BannerHome";

import { ServicesService } from "../services/Services";

const Home = ({ dataServices }) => {
  console.log(dataServices);

  return (
    <>
      <BannerHome />
      <CardsCategories />
      <CardsServices />
      <BannerContact />
      <CardsRepresentations />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const [dataServices] = await Promise.all([ServicesService.getServices()]);

  return {
    props: {
      dataServices,
    },
    revalidate: 60, // In seconds
  };
}

export default Home;
