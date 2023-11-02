// Path: /Volumes/git/public-osdk/examples/one_dot_one/src/generated/Ontology
import type { OntologyDefinition } from "@osdk/api";
import type { Ontology as ClientOntology } from "@osdk/legacy-client";
import { Person } from "./objects/Person";
import { Todo } from "./objects/Todo";
import type { Objects } from "./ontologyObjects";
export const Ontology = {
  metadata: {
    ontologyRid: "ridHere",
    ontologyApiName: "OntologyApiName",
    userAgent: "foundry-typescript-osdk/0.0.1",
  },
  objects: {
    Todo,
    Person,
  },
} satisfies OntologyDefinition<"Todo" | "Person">;

export interface Ontology extends ClientOntology<typeof Ontology> {
  objects: Objects;
}
