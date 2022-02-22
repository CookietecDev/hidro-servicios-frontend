import { http } from "../data/http";

const url = process.env.URL_STRAPI;

export const CategoriesService = {
    getCategories: async () => {
        try {
            return await http
                .get(`${url}/categorias`)
                .then((res) => {
                    return res;
                })
                .catch((ex) => {
                    return [];
                });
        } catch (err) {
            // console.log(err);
            throw Error("Error al obtener getCategories");
        }
    },
};
