import { AttachmentPropertiesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const getAttachment: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof AttachmentPropertiesV2.getAttachment>;
export declare const readAttachment: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof AttachmentPropertiesV2.readAttachment>;
