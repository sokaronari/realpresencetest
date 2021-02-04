import client from "./client";

const unpresence = (qrtoken, Authorization) =>
  client.post(
    "/unpresence",
    { token_qr: qrtoken },
    { headers: { Authorization } }
  );

export default { unpresence };
