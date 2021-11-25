import robert from "robert";

export default async function (url: string) {
  const { data, headers }: { data: Buffer; headers: object } = await robert
    .get(url)
    .send("buffer", true);

  const type = headers["content-type"];
  const encoding = "base64";

  return "data:" + type + ";" + encoding + "," + data.toString(encoding);
}