export const getPromotions = (data) => {
  const promotions = data.map((item) => ({
    image: `${process.env.NEXT_PUBLIC_URL_STRAPI}${item.imagen.url}`,
  }));

  return promotions;
};
