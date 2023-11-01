import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
import { useQuery } from "@tanstack/react-query";

// const getDataMovie = async () => {
//       const response = await http.get(API_ENDPOINT.MOVIE_POPULAR);
//       return response.data;
//   }; 

export const reduxMovie = async () => {
  return await http.get(API_ENDPOINT.MOVIE_POPULAR)
}

// const fetchDataMoviesPopular = async ({ queryKey }) => {
//   const [_key] = queryKey;
//   const { data } = await http
//     .get(_key)
//     .then((result) => {
//       return result;
//     })
//     .catch((err) => {
//       if (err.response.status === 401) {
//         window.location.href = "/";
//       }
//     });
//   return data.data;
// };

// const useDataMoviesPopularQuery = (options) => {
//   return useQuery([API_ENDPOINT.MOVIE_POPULAR, options], fetchDataMoviesPopular);
// };

// export {fetchDataMoviesPopular, useDataMoviesPopularQuery}