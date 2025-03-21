import { QueryTypes } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const get: CallFactory<"ontologyApiName" | "queryTypeApiName", typeof QueryTypes.get>;
export declare const list: CallFactory<"ontologyApiName", typeof QueryTypes.list>;
