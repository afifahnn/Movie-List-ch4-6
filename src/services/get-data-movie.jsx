import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const getDataMovie = async () => {
      const response = await http.get(API_ENDPOINT.POPULAR);
      return response.data;
  };

const fetchDataMovie = async (page) => {
    // V3
    const {data} = await http.get(`${API_ENDPOINT.POPULAR}?page=${ page ? page : 1 }`)
    // V4
    // const [_key, _param] = queryKey;
    // const { data } = await http.get(_key, { params: _param });
    return data
}

// untuk dinamis handle
const useMovieDataQuery = (page) => {
    // V3
    return useQuery(["userData", page], () => fetchDataMovie(page));
    // V4
    // return useQuery([API_ENDPOINT.POPULAR, options], fetchDataMovie());
}

export {fetchDataMovie, useMovieDataQuery, getDataMovie}