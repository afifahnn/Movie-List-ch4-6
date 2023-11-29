import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const reduxMovieDetail = async (id) => {
    const {data} = await http.get(`${API_ENDPOINT.DETAIL_MOVIE}${id}`)
    return data 
  }

const fetchDataMoviesDetail = async (id) => {
    const {data} = await http.get(`${API_ENDPOINT.DETAIL_MOVIE}${id}`)
    return data.data
}

// const fetchDataMoviesDetail = async ({ queryKey }) => {
//     const [_key, _params] = queryKey;
//     const { data } = await http
//       .get(_key, { params: _params })
//       .then((result) => {
//         return result;
//       })
//       .catch((err) => {
//         // if (err.response.status === 401 || err.response.status === 404) {
//         //   window.location.href = "/";
//         // }
//         console.log(err)
//       });
//     return data.data;
//   };

const useDataMoviesDetailQuery = (id) => {
    return useQuery(["userData", id], () => fetchDataMoviesDetail(id));
}

// const useDataMoviesDetailQuery = (options) => {
//     const data = useLocation();
//     const [ID, setID] = useState(data.state ? data.state.idMovie : "");
  
//     return useQuery([`${API_ENDPOINT.DETAIL_MOVIE}/${ID}`, options], fetchDataMoviesDetail);
//   };

export {fetchDataMoviesDetail, useDataMoviesDetailQuery}