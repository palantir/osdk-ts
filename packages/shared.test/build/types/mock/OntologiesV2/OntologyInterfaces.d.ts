import { OntologyInterfaces } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const list: CallFactory<"ontologyApiName", typeof OntologyInterfaces.list>;
export declare const get: CallFactory<"ontologyApiName" | "interfaceType", typeof OntologyInterfaces.get>;
