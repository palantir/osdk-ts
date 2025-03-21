import { MediaReferenceProperties } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const getMediaMetadata: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof MediaReferenceProperties.getMediaMetadata>;
export declare const getMediaContent: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof MediaReferenceProperties.getMediaContent>;
export declare const upload: CallFactory<"ontologyApiName" | "objectType" | "propertyName", typeof MediaReferenceProperties.upload>;
