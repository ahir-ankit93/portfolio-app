export const isLoggedIn = () => {
  const token = localStorage.getItem("ankit_auth_token");
  return token ? true : false;
};
