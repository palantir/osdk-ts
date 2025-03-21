import type { ExternalMappingConfigurationFilter } from "../typemapping/ExternalMappingConfigurationFilter.js";
/**
* Request to load all visible Ontologies. This is only expected to be used by Ontology Metadata App.
*/
export interface LoadAllOntologiesInternalRequest {
	includeEmptyDefaultOntology: boolean | undefined;
	externalMappingConfigurationFilters: Array<ExternalMappingConfigurationFilter>;
}
