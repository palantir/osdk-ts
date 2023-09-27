import type { OntologyDefinition } from "@osdk/api";
import { OntologyMetadata } from "./OntologyMetadata";
import { Employee } from "./objects/Employee";
import { Todo } from "./objects/Todo";

export const Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Employee: Employee,
    Todo: Todo,
  },
} satisfies OntologyDefinition<"Employee" | "Todo">;
