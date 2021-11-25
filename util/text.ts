import TextToSVG from "text-to-svg";
import { resolve } from "path";

const dir = resolve(__dirname, "..", "fonts");
const anchor: TextToSVG.Anchor = "left top";

const fGinto = TextToSVG.loadSync(resolve(dir, "ginto.otf"));
const fWhitney = TextToSVG.loadSync(resolve(dir, "whitneymedium.otf"));
const fWhitneyBold = TextToSVG.loadSync(resolve(dir, "whitneybold.otf"));

export function ginto(fontSize: number, text: string, options?: TextToSVG.GenerationOptions) {
  return fGinto.getD(text, { fontSize, anchor, ...options });
}

export function dGinto(fontSize: number, text: string, options?: TextToSVG.GenerationOptions) {
  return fGinto.getMetrics(text, { fontSize, anchor, ...options });
}

export function whitney(fontSize: number, text: string, options?: TextToSVG.GenerationOptions) {
  return fWhitney.getD(text, { fontSize, anchor, ...options });
}

export function dWhitney(fontSize: number, text: string, options?: TextToSVG.GenerationOptions) {
  return fWhitney.getMetrics(text, { fontSize, anchor, ...options });
}

export function whitneyBold(fontSize: number, text: string, options?: TextToSVG.GenerationOptions) {
  return fWhitneyBold.getD(text, { fontSize, anchor, ...options });
}

export function dWhitneyBold(
  fontSize: number,
  text: string,
  options?: TextToSVG.GenerationOptions
) {
  return fWhitneyBold.getMetrics(text, { fontSize, anchor, ...options });
}