export const getCategories = (data) => {
  const categories = data.map((item) => ({
    name: item.nombre,
    image: `${process.env.NEXT_PUBLIC_URL_STRAPI}${item.imagen.url}`,
  }));

  return categories;
};
