import AuthContext from "../auth/context";
import React, { useContext, useState } from "react";

export default function data() {
  const { userData } = useContext(AuthContext);
  const userId = userData.data.user.id;
  const token = userData.data.access_token;
}
