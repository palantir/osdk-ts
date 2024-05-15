import { createClient } from "@osdk/client/unstable-do-not-use";
import invariant from "tiny-invariant";
import { logger } from "./logger.js";
import { loggingFetch } from "./loggingFetch.js";

invariant(process.env.FOUNDRY_STACK !== undefined);
invariant(process.env.FOUNDRY_USER_TOKEN !== undefined);

export const client = createClient(
  process.env.FOUNDRY_STACK,
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  async () => process.env.FOUNDRY_USER_TOKEN!,
  { logger },
  loggingFetch,
);
