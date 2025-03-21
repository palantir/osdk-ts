import { LinkedObjectsV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const listLinkedObjects: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "linkType", typeof LinkedObjectsV2.listLinkedObjects>;
export declare const getLinkedObject: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "linkType" | "targetPrimaryKey", typeof LinkedObjectsV2.getLinkedObject>;
