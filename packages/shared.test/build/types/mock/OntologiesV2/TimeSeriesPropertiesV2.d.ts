import { TimeSeriesPropertiesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const getFirstPoint: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof TimeSeriesPropertiesV2.getFirstPoint>;
export declare const getLastPoint: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof TimeSeriesPropertiesV2.getLastPoint>;
export declare const streamPoints: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof TimeSeriesPropertiesV2.streamPoints>;
