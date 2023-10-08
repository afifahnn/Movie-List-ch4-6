// import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const getDataMovie = async () => {
      const response = await http.get(API_ENDPOINT.POPULAR);
      return response.data;
  };

// const fetchDataMovie = async (page) => {
//     const {data} = await http.get(`${API_ENDPOINT.POPULAR}?page=${ page ? page : 1 }`)
//     return data
// }

// const useMovieDataQuery = (page) => {
//     return useQuery(["userData", page], () => fetchDataMovie(page));
// }

export {getDataMovie}