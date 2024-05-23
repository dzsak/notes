export const getToken = () => {
  // return window.localStorage.getItem("access_token");
  return true // TODO
}

export const getUsername = () => {
  const token = getToken();

  if (!token) {
    return null;
  }
  // const decoded = jwtDecode(token); npm i jwt-decode
  // const userName = decoded.sub;
  // return userName;
};
