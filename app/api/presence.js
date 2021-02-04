import client from "./client";

const presence = (qrtoken, Authorization) =>
  client.post(
    "/presence",
    { token_qr: qrtoken },
    { headers: { Authorization } }
  );

export default { presence };
