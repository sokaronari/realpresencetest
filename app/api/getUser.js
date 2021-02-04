import client from "./client";
const endpoint = "/user";
const getUser = (id, Authorization) =>
  client.get(endpoint + "/".concat(id), {}, { headers: { Authorization } });

export default { getUser };
