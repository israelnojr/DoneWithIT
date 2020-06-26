import client from "./client";

const Login = "auth/login";
const User = "auth/user";
const Logout = "auth/logout";

const userLogin = (email, password) => client.post(Login, { email, password });
const getUser = (token) => client.get(User, { token });
const userLogout = (token) => client.post(Logout, { token });

export default {
  userLogin,
  getUser,
  userLogout,
};
