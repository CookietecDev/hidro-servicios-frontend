export const getRepresentation = (data) => {
  const representation = data.map((item) => ({
    image: `${process.env.NEXT_PUBLIC_URL_STRAPI}${item.imagen.url}`,
  }));

  return representation;
};
