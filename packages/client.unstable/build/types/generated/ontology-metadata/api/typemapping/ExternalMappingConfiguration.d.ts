import type { GothamMappingConfiguration } from "./GothamMappingConfiguration.js";
export interface ExternalMappingConfiguration_gotham {
	type: "gotham";
	gotham: GothamMappingConfiguration;
}
/**
* Configuration for external type systems that Foundry ontology entities can be mapped to.
*/
export type ExternalMappingConfiguration = ExternalMappingConfiguration_gotham;
