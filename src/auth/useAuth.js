import { useContext } from "react";
import AuthContext from "./context";
import AuthStorage from "./storage";
export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    const userIsLoggedOut = AuthStorage.loggedOut();
    if (userIsLoggedOut) setUser(null);
  };

  return { user, setUser, logOut };
};
