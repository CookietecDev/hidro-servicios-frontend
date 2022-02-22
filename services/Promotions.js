import { http } from "../data/http";

const url = process.env.URL_STRAPI;

export const PromotionsService = {
    getPromotions: async () => {
        try {
            return await http
                .get(`${url}/promociones`)
                .then((res) => {
                    return res;
                })
                .catch((ex) => {
                    return {};
                });
        } catch (err) {
            // console.log(err);
            throw Error("Error al obtener getPromotions");
        }
    },
};
