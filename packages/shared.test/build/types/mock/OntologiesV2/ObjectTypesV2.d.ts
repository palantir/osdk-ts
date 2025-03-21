import { ObjectTypesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const get: CallFactory<"ontologyApiName" | "objectTypeApiName", typeof ObjectTypesV2.get>;
export declare const getFullMetadata: CallFactory<"ontologyApiName" | "objectTypeApiName", typeof ObjectTypesV2.getFullMetadata>;
export declare const getOutgoingLinkType: CallFactory<"ontology" | "objectType" | "linkType", typeof ObjectTypesV2.getOutgoingLinkType>;
export declare const listOutgoingLinkTypes: CallFactory<"ontology" | "objectType", typeof ObjectTypesV2.listOutgoingLinkTypes>;
export declare const list: CallFactory<"ontologyApiName", typeof ObjectTypesV2.list>;
