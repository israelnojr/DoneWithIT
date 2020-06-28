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
  if (!token) return;

  const user = await authApi.getUser();
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
export default {
  storeToken,
  getToken,
  getUser,
  removeToken,
};
