import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataMovieDetail = async (id) => {
    const {data} = await http.get(`${API_ENDPOINT.DETAIL}${id}`)
    return data
}

const useMovieDataQueryDetail = (id) => {
    return useQuery(["userData", id], () => fetchDataMovieDetail(id));
}

export {fetchDataMovieDetail, useMovieDataQueryDetail}