import { dWhitney, dWhitneyBold, whitney, whitneyBold } from "../../util/text";
import { readFileSync } from "fs";
import { APIInvite } from "discord-api-types";
import { CDN } from "../constants";
import image from "../../util/image";
import * as constants from "./constants";

let base = readFileSync(__dirname + "/base.svg", "utf-8");
Object.entries(constants).forEach(([_key, _value]) => {
  const key = "{" + _key + "}";
  const value = _value.toString();
  base = base.replaceAll(key, value);
});

export default async function (invite: APIInvite) {
  const config = {
    join: "Join",
    text: "You've been invited to join a server"
  };

  const TEXT = whitneyBold(constants.TEXT_SIZE, config.text.toUpperCase());
  const ICON_URL = invite.guild.icon
    ? "/icons/" + invite.guild.id + "/" + invite.guild.icon + "?size=64"
    : "/embed/avatars/1.png";

  const ICON = await image(CDN + ICON_URL);
  const NAME = whitneyBold(constants.NAME_SIZE, invite.guild.name);

  const _ONLINE = (invite.approximate_presence_count ?? 0) + " Online";
  const ONLINE = whitneyBold(constants.ONLINE_TEXT_SIZE, _ONLINE);
  const dONLINE = dWhitneyBold(constants.ONLINE_TEXT_SIZE, _ONLINE);
  const ONLINE_TEXT_Y = constants.TOTAL_TEXT_Y - dONLINE.height / 2;
  const _TOTAL = (invite.approximate_member_count ?? 0) + " Members";
  const TOTAL = whitneyBold(constants.TOTAL_TEXT_SIZE, _TOTAL);
  const dTOTAL = dWhitneyBold(constants.TOTAL_TEXT_SIZE, _TOTAL);
  const TOTAL_X = constants.TOTAL_X + dONLINE.width;
  const TOTAL_TEXT_Y = constants.TOTAL_TEXT_Y - dTOTAL.height / 2;
  const JOIN = whitney(constants.JOIN_TEXT_SIZE, config.join);
  const dJOIN = dWhitney(constants.JOIN_TEXT_SIZE, config.join);
  const JOIN_WIDTH = constants.JOIN_WIDTH + dJOIN.width;
  const JOIN_X = constants.INFO_WIDTH - JOIN_WIDTH;

  const _JOIN_TEXT_X = JOIN_WIDTH / 2;
  const _JOIN_TEXT_Y = constants.JOIN_HEIGHT / 2;
  const JOIN_TEXT_X = _JOIN_TEXT_X - dJOIN.width / 2;
  const JOIN_TEXT_Y = _JOIN_TEXT_Y - dJOIN.height / 2;

  return base
    .replaceAll("[TEXT]", TEXT)
    .replaceAll("[ICON]", ICON)
    .replaceAll("[NAME]", NAME)
    .replaceAll("[ONLINE]", ONLINE)
    .replaceAll("[ONLINE_TEXT_Y]", ONLINE_TEXT_Y.toString())
    .replaceAll("[TOTAL]", TOTAL)
    .replaceAll("[TOTAL_X]", TOTAL_X.toString())
    .replaceAll("[TOTAL_TEXT_Y]", TOTAL_TEXT_Y.toString())
    .replaceAll("[JOIN]", JOIN)
    .replaceAll("[JOIN_WIDTH]", JOIN_WIDTH.toString())
    .replaceAll("[JOIN_X]", JOIN_X.toString())
    .replaceAll("[JOIN_TEXT_X]", JOIN_TEXT_X.toString())
    .replaceAll("[JOIN_TEXT_Y]", JOIN_TEXT_Y.toString());
}