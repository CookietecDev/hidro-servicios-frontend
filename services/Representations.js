import { http } from "../data/http";

const url = process.env.URL_STRAPI;

export const RepresentationsService = {
    getRepresentaciones: async () => {
        try {
            return await http
                .get(`${url}/representaciones`)
                .then((res) => {
                    return res;
                })
                .catch((ex) => {
                    return [];
                });
        } catch (err) {
            // console.log(err);
            throw Error("Error al obtener getRepresentaciones");
        }
    },
};
