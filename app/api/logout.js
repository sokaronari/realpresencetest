import client from "./client";

const logout = Authorization =>
  client.get("/logout", {}, { headers: { Authorization } });

export default { logout };
