import { colorize } from "consola/utils";

export function green(text: string) {
  return colorize("green", text);
}

export function italic(text: string) {
  return colorize("italic", text);
}
