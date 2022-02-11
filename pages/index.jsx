import React from "react";
import CardsCategories from "../components/containers/CardsCategories";
import CardsServices from "../components/containers/CardsServices";
import Menu from "../components/containers/Menu";
import Footer from "../components/elements/Footer";

const Home = () => {
  return (
    <>
      <Menu />
      <CardsCategories />
      <CardsServices />
      <Footer />
    </>
  );
};

export default Home;
