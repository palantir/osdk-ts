import { createClient, createThinClient } from "@osdk/api";
import { Ontology } from "@osdk/examples.basic.sdk";
import type { OntologyType } from "./OntologyType";
import { fetchAggregationForEmployees } from "./examples/fetchAggregationForEmployees";
import { fetchAggregationForEmployeesGrouped } from "./examples/fetchAggregationForEmployeesGrouped";
import { fetchAggregationForEmployeesGroupedThin } from "./examples/fetchAggregationForEmployeesGroupedThin";
import { fetchEmployeeLead } from "./examples/fetchEmployeeLead";
import { fetchEmployeePage } from "./examples/fetchEmployeePage";
import { fetchEmployeePageByAdUsername } from "./examples/fetchEmployeePageByAdUsername";
import { fetchEmployeePageByAdUsernameAndLimit } from "./examples/fetchEmployeePageByAdUsernameAndLimit";
import { fetchEmployeePageThin } from "./examples/fetchEmployeePageThin";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FOUNDRY_USER_TOKEN: string;
      FOUNDRY_STACK: string;
    }
  }
}

export const client = createClient(
  Ontology as OntologyType,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN,
);

export const thinClient = createThinClient(
  Ontology as OntologyType,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN,
);

async function runTests() {
  try {
    await fetchEmployeePage(client);
    await fetchEmployeePageByAdUsername(client, "fish");
    await fetchEmployeePageByAdUsernameAndLimit(client, "fish");
    await fetchAggregationForEmployees(client);
    await fetchAggregationForEmployeesGrouped(client);
    await fetchEmployeePageThin(thinClient);

    await fetchAggregationForEmployeesGroupedThin(thinClient);
    await fetchEmployeeLead(client, "bob");
  } catch (e) {
    console.error("Caught an error we did not expect", typeof e);
    console.error(e);
  }
}

runTests();
