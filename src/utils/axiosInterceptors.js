import { resolveOnChange } from "antd/lib/input/Input";
import axios from "axios";
import TokenService from "./tokenHelper";

const { getLocalAccessToken, getLocalRefreshToken, setToken, setRefreshToken } =
  TokenService;
const token = getLocalAccessToken();
const refreshToken = getLocalRefreshToken();

var axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

//This allows you to intercept the request before it is sent and alter headers or anyting else that is passed to the axios config.
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("Interceptor Request Error" + error);
  }
);

//This allows you to intercept the response and check the status and error messages and if ncessary reject the promise.
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return response;
  },
  (error) => {
    console.log("Interceptor Response Error" + error);
    console.log(error.response);
    if (error.response) {
      const originalReq = error.response.config;
      if ((error.response.status === 401 || error.response.status === 422)&& !originalReq._retry) {
        originalReq._retry = true;
        // let res = fetch("http://localhost:5000/refresh", {
        //   method: "POST",
        //   mode: "cors",
        //   cache: "no-cache",
        //   credentials: "same-origin",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Device: "device",
        //     Token: token,
        //   },
        //   redirect: "follow",
        //   referrer: "no-referrer",
        //   body: JSON.stringify({
        //     token: token,
        //     refresh_token: refreshToken,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     console.log(res);
        //     // this.setSession({token: res.token, refresh_token: res.refresh});
        //     setToken(res.token)
        //     setRefreshToken(res.refreshToken)
        //     originalReq.headers['Token'] = res.token;
        //     originalReq.headers['Device'] = "device";
        //     return axios(originalReq);
        //   });
        axios({
          method: "post",
          url: "/refresh",
          headers: { Authorization: `Bearer ${refreshToken}` },
        })
          .then(function (response) {
            //handle success
            console.log("response: ", response);
            // this.setSession({token: res.token, refresh_token: res.refresh});
            setToken(response.data.access_token)
            originalReq.headers['Authorization'] = `Bearer ${response.data.access_token}`;
            return axios(originalReq);
          })
          .catch(function (response) {
            //handle error
            console.log("Error (axios refresh token) ", response);
            return Promise.reject(response.response);
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
