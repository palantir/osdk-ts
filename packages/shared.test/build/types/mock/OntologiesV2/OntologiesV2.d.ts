import { OntologiesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const getFullMetadata: CallFactory<"ontologyApiName", typeof OntologiesV2.getFullMetadata>;
export declare const list: CallFactory<never, typeof OntologiesV2.list>;
/**
* Get specified Ontology
*/
export declare const get: CallFactory<"ontologyRid", typeof OntologiesV2.get>;
