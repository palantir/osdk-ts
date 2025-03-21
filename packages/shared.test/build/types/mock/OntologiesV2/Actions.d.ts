import { Actions } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const applyBatch: CallFactory<"ontologyApiName" | "actionType", typeof Actions.applyBatch>;
export declare const apply: CallFactory<"ontologyApiName" | "actionType", typeof Actions.apply>;
