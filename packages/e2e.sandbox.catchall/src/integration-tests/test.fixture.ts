import metadata from "@osdk/e2e.generated.catchall/UNSTABLE_DO_NOT_USE/ontology-metadata";
import type { Ontologies } from "@osdk/foundry";
import {
  type IntegrationServer,
  type IntegrationClient,
  type SeedClient,
  createIntegrationServer,
} from "@osdk/integration-testing";
import {
  type SeedOutput,
  type SeedFunction,
  createSeedWithMetadata,
} from "@osdk/seed-helpers";
import { test as baseTest, type TestAPI } from "vitest";

const filteredObjectTypes = new Set(["Person", "Todo", "Game", "Book"]);
const filteredInterfaceTypes = new Set(["LibraryItem"]);

const modifiedMetadata: Ontologies.OntologyFullMetadata = {
  ontology: metadata.ontology,
  objectTypes: Object.fromEntries(
    Object.entries(metadata.objectTypes).filter(([k]) =>
      filteredObjectTypes.has(k),
    ),
  ),
  actionTypes: {},
  interfaceTypes: Object.fromEntries(
    Object.entries(metadata.interfaceTypes).filter(([k]) =>
      filteredInterfaceTypes.has(k),
    ),
  ),
  queryTypes: {},
  valueTypes: {},
  sharedPropertyTypes: {},
};

/**
 * This is a fixture that injects server, seed and client to the testing functions contexts.
 * We need to initialize the server and client before the tests can consume them, and this
 * fixture ensures that all of the dependencies are ready before we run the tests.
 */
export const test = baseTest
  // eslint-disable no-empty-pattern
  .extend("server", { scope: "worker" }, async ({}, { onCleanup }) => {
    const server = await createIntegrationServer({
      metadata: modifiedMetadata,
    });
    onCleanup(async () => await server.stop());
    await server.start();
    return server;
  })
  .extend(
    "seed",
    { scope: "worker" },
    async ({ server }) => await server.getSeedClient(),
  )
  .extend(
    "client",
    { scope: "worker" },
    async ({ server }) => await server.getClient(),
  ) as TestAPI<{
  server: IntegrationServer;
  client: IntegrationClient;
  seed: SeedClient;
}>;

export const createSeed: <T>(fn: SeedFunction<T>) => {
  output: SeedOutput;
  context: T;
} = <T>(seed: SeedFunction<T>) =>
  createSeedWithMetadata(modifiedMetadata, seed);
