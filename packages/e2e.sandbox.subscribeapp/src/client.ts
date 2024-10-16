import type { Client } from "@osdk/client";
import { createClient, createPlatformClient } from "@osdk/client";
import invariant from "tiny-invariant";

invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");
invariant(import.meta.env.VITE_USER_TOKEN, "VITE_USER_TOKEN is required");

export const client: Client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  "ri.ontology.main.ontology.6ae2b235-997d-4b5e-9611-85fa88742697",
  async () => import.meta.env.VITE_USER_TOKEN!,
);
