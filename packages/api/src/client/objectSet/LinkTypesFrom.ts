import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";

export type LinkTypesFrom<
  O extends OntologyDefinition<string>,
  K extends ObjectTypesFrom<O>,
> = keyof O["objects"][K]["links"] & string;
