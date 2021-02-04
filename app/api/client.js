import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://realpresence.nore.web.id/api/auth",
  headers: { Accept: "application/json" }
});

export default apiClient;
