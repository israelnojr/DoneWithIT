import client from "./client";

const Login = "auth/login";

const userLogin = () => client.post(Login);

export default {
  userLogin,
};
