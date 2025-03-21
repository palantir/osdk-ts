import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { FauxActionImpl } from "../../FauxFoundry/FauxActionImpl.js";
/**
* I don't think this should be used long term, but it provides a stop gap for
* migrating the existing actions to the new API.
*/
export declare function createLazyDoNothingActionImpl(reqRespPairs: Array<[OntologiesV2.ApplyActionRequestV2, OntologiesV2.SyncApplyActionResponseV2 | undefined] | [OntologiesV2.BatchApplyActionRequestV2, OntologiesV2.BatchApplyActionResponseV2 | undefined]>): FauxActionImpl;
