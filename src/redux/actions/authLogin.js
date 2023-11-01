import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/authLoginSlice";
import { reduxLoginUser } from "../../services/auth/login_user";

export const LoginUser = (input) => (dispatch) => {
  return reduxLoginUser(input)
    .then((result) => {
      CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
    // memasukkan ke redux
      dispatch(setToken(result.data.data.token));
    return true
    })
    .catch((err) => {});
};

export const LogOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  CookiesStorage.remove(CookiesKey.AuthToken);
};
