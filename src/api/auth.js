import client from "./client";

const Login = "auth/login";
const User = "auth/user";
const logout = "auth/logout";

const userLogin = (email, password) => client.post(Login, { email, password });
const getUser = () => client.get(User);
const Logout = () => client.post(logout);

export default {
  userLogin,
  getUser,
  Logout,
};
