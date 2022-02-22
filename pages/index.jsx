import React from "react";
import CardsCategories from "../components/containers/CardsCategories";
import CardsServices from "../components/containers/CardsServices";
import BannerContact from "../components/elements/BannerContact";
import CardsRepresentations from "../components/containers/CardsRepresentations/index";
import Footer from "../components/ui/Footer";
import BannerHome from "../components/elements/BannerHome";

import { ServicesService } from "../services/Services";
import { getServices } from "../helpers/Services";
import { CategoriesService } from "../services/Categories";
import { PromotionsService } from "../services/Promotions";
import { RepresentationsService } from "../services/Representations";

const Home = ({
  dataServices,
  dataCategories,
  dataPromotions,
  dataRepresentations,
}) => {
  const services = getServices(dataServices);
  return (
    <>
      <BannerHome />
      <CardsCategories />
      <CardsServices data={services} />
      <BannerContact />
      <CardsRepresentations />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const [dataServices, dataCategories, dataPromotions, dataRepresentations] =
    await Promise.all([
      ServicesService.getServices(),
      CategoriesService.getCategories(),
      PromotionsService.getPromotions(),
      RepresentationsService.getRepresentaciones(),
    ]);

  return {
    props: {
      dataServices,
      dataCategories,
      dataPromotions,
      dataRepresentations,
    },
    revalidate: 60, // In seconds
  };
}

export default Home;
