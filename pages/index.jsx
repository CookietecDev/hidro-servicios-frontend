import React from "react";
import CardsCategories from "../components/containers/CardsCategories";
import CardsRepresentations from "../components/containers/CardsRepresentations";
import CardsServices from "../components/containers/CardsServices";
import CardContact from "../components/elements/CardContact";
import Footer from "../components/elements/Footer";
import HomeBanner from "../components/elements/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <CardsCategories />
      <CardsServices />
      <CardContact />
      <CardsRepresentations />
      <Footer />
    </>
  );
};

export default Home;
