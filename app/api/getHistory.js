import client from "./client";
const endpoint = "/historypresence";
const getHistory = (Authorization) =>
  client.get(endpoint , {}, { headers: { Authorization } });

export default { getHistory };
