import { TimeSeriesValueBankProperties } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const getLatestValue: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof TimeSeriesValueBankProperties.getLatestValue>;
export declare const streamValues: CallFactory<"ontologyApiName" | "objectType" | "primaryKey" | "propertyName", typeof TimeSeriesValueBankProperties.streamValues>;
