import http from "../../utils/http"
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

export const reduxLoginUser = async (input)=>{
  return await http.post(API_ENDPOINT.LOGIN_USER , input )
}

// const LoginUser = async (input) => {
//   return await http.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
//     CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
//     return result;
//   });
// };

// const useLoginUser = () => {
//   return useMutation(LoginUser)
// }

// export {LoginUser, useLoginUser}