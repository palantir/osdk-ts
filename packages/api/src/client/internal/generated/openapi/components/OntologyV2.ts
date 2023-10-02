import { OntologyApiName } from "./OntologyApiName";
import { DisplayName } from "./DisplayName";
import { OntologyRid } from "./OntologyRid";

/** Metadata about an Ontology. */
export type OntologyV2 = { apiName: OntologyApiName; displayName: DisplayName; description: string; rid: OntologyRid; };
