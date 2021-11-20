const getLocalRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken")
    ? localStorage.getItem("refreshToken")
    : null;
  return refreshToken;
};

const getLocalAccessToken = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  return token;
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const setRefreshToken = (token) => {
  localStorage.setItem("refreshToken", token);
};

const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  setToken,
  setRefreshToken,
  removeToken,
  removeRefreshToken
};

export default TokenService;
