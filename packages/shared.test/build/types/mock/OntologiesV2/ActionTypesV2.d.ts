import { ActionTypesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const list: CallFactory<"ontologyApiName", typeof ActionTypesV2.list>;
export declare const get: CallFactory<"ontologyApiName" | "actionTypeApiName", typeof ActionTypesV2.get>;
