export const getServices = (data) => {
  const services = data?.map((item) => ({
    description: item.descripcion,
    image: `${process.env.NEXT_PUBLIC_URL_STRAPI}${item.imagen.url}`,
    name: item.nombre,
    specs: item.especificaciones?.split(","),
  }));

  return services;
};
