import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { FauxDataStore } from "./FauxDataStore.js";
export interface FauxQueryImpl {
	(req: OntologiesV2.ExecuteQueryRequest, fauxDataStore: FauxDataStore): OntologiesV2.ExecuteQueryResponse;
}
