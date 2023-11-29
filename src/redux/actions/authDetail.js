import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { reduxMovieDetail } from "../../services/get-data-detail";
import { setDetail } from "../reducers/movie/authDetailSlice";

export const GetMovieDetail = (id) => (dispatch) => {
  return reduxMovieDetail(id)
    .then((result) => {
        dispatch(setDetail(result.data.data));
        // return result;
        return true
    })
    .catch((err) => {});
}; 