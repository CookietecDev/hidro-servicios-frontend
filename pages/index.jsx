import React from "react";
import CardsCategories from "../components/containers/CardsCategories";
import CardsServices from "../components/containers/CardsServices";
import BannerContact from "../components/elements/BannerContact";
import CardsRepresentations from "../components/containers/CardsRepresentations/index";
import Footer from "../components/ui/Footer";
import BannerHome from "../components/elements/BannerHome";

const Home = () => {
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

export default Home;
