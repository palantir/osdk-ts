import chalk from "chalk";
import { logger } from "./logger.js";

export async function loggingFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  let url = new URL(
    (typeof input === "string")
      ? input
      : (input instanceof URL)
      ? input.toString()
      : input.url,
  );

  const cleaned = url.pathname.replace(/ri.ontology..*?\//, "{rid}/");

  logger.debug(`fetch(${chalk.blue(cleaned)})`);
  return await fetch(input, init);
}
