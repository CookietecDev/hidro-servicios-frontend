import React from "react";
import CardsCategories from "../components/containers/CardsCategories";
import CardsServices from "../components/containers/CardsServices";
import Menu from "../components/containers/Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <CardsCategories />
      <CardsServices />
    </>
  );
};

export default Home;
