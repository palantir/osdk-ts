import { OntologyObjectSets } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const load: CallFactory<"ontologyApiName", typeof OntologyObjectSets.load>;
export declare const aggregate: CallFactory<"ontologyApiName", typeof OntologyObjectSets.aggregate>;
export declare const loadMultipleObjectTypes: CallFactory<"ontologyApiName", typeof OntologyObjectSets.loadMultipleObjectTypes>;
