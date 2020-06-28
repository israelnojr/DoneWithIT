import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://63d7993e4824.ngrok.io/api/",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer" + authToken;
});
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig);
  if (res.ok) {
    cache.store(url, res.data);
    return res;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : res;
};
export default apiClient;
