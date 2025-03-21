import { OntologyObjectsV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const get: CallFactory<"ontologyApiName" | "objectType" | "primaryKey", typeof OntologyObjectsV2.get>;
export declare const list: CallFactory<"ontologyApiName" | "objectType", typeof OntologyObjectsV2.list>;
