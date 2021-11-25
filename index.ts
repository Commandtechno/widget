import express from "express";
import robert from "robert";

import { APIInvite } from "discord-api-types";
import { API } from "./src/constants";

import renderInvite from "./src/invite";

const app = express();
const api = robert.client(API).query("with_counts", true);

app.get("/invite/:code", async (req, res) => {
  const code = req.params.code;
  if (!/\w{2,32}/.test(code)) {
    res.contentType("text/plain");
    res.status(400).send("Invalid code");
    return;
  }

  let invite: APIInvite;
  try {
    invite = await api.get("/invites/" + code).send("json");
  } catch {
    res.contentType("text/plain");
    res.status(404).send("Invalid invite");
    return;
  }

  const svg = await renderInvite(invite, req.query);
  res.contentType("image/svg+xml");
  res.send(svg);
});

app.listen(3000, () => console.log("Listening on port 3000"));