export const LogOutHelper = () => {
    const token = sessionStorage.getItem("jwt-token");
    console.log(token);
    const isLoggedIn = (token && token!=="" && token!== undefined)? true: false
    if (isLoggedIn) {
        sessionStorage.setItem("jwt-token", "");
    }
  };