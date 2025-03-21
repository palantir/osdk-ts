/**
* Ontology configurations that can be only modifiable by the Users that have `ontology:update-ontology`
* permission on the Ontology.
*/
export interface OntologyAdminConfig {
	enableUsage: boolean;
}
