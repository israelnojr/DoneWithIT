import { useContext } from "react";
import AuthContext from "./context";
import authApi from "../api/auth";
import AuthStorage from "./storage";
export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = async (authToken) => {
    AuthStorage.storeToken(authToken);
    const user = await AuthStorage.getUser();
    if (!user) return;
    setUser(user);
  };

  const logOut = async () => {
    const res = await authApi.Logout();
    if (!res.ok)
      return (error) => console.log("Error logging out on server", error);
    setUser(null);
    AuthStorage.removeToken();
  };

  return { user, setUser, logOut, logIn };
};
