import * as SecureStore from "expo-secure-store";
import authApi from "../api/auth";
const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the authToken", error);
  }
};

const getToken = async () => {
  try {
    return (authToken = await SecureStore.getItemAsync(key));
  } catch (error) {
    console.log("Error getting the authToken", error);
  }
};
const getUser = async () => {
  const token = await getToken();
  if (!token) return null;
  const user = await authApi.getUser(token);
  if (!user.ok)
    return (error) => console.log("error getting user from server", error);
  return user.data;
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the authToken", error);
  }
};

const loggedOut = async () => {
  const token = await getToken();
  const res = await authApi.userLogout(token);
  if (!res.ok)
    return (error) => console.log("Error logging out on server", error);
  removeToken();
  return true;
};
export default {
  storeToken,
  getUser,
  loggedOut,
  removeToken,
};
