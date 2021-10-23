// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.
// If they are: they proceed to the page
// If not: they are redirected to the login page.

export const isAuthed = () => {
  const token = sessionStorage.getItem("jwt-token");
  console.log("isauthed token: ", token);
  const isLoggedIn = (token && token!=="" && token!== undefined)? true: false
  return isLoggedIn;
};

