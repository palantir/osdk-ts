export type { WhereClause } from "#client/query";
export type { OsdkObject } from "#ontology";
export { createClient, createThinClient, isOk } from "./client";
export type { Client, ThinClient, ObjectSet, ResultOrError } from "./client";

// FIXME: Shoudl this be Objects or Object?
export * as Objects from "./client/object";

export type {
  OntologyDefinition,
  ObjectDefinition,
} from "./ontology/Definition";
