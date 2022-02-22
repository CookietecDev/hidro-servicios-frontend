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
import { getRepresentation } from "../helpers/Representation";
import { getCategories } from "../helpers/Categories";
import { getPromotions } from "../helpers/Promotions";

const Home = ({
  dataServices,
  dataCategories,
  dataPromotions,
  dataRepresentations,
}) => {
  const services = getServices(dataServices);
  const representations = getRepresentation(dataRepresentations);
  const categories = getCategories(dataCategories);
  const promotions = getPromotions(dataPromotions);
  console.log(promotions);
  return (
    <>
      <BannerHome data={promotions} />
      <CardsCategories data={categories} />
      <CardsServices data={services} />
      <BannerContact />
      <CardsRepresentations data={representations} />
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
