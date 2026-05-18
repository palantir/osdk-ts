import { createClient } from "@osdk/client";

const ONTOLOGY_RID =
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000";

export const client = createClient(
  window.location.origin,
  ONTOLOGY_RID,
  () => Promise.resolve("myAccessToken"),
);
