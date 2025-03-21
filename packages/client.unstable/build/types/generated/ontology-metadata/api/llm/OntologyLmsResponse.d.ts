import type { ActionTypeDescriptionGeneratorPluginResponse } from "./ActionTypeDescriptionGeneratorPluginResponse.js";
import type { StringPluginResponse } from "./StringPluginResponse.js";
export interface OntologyLmsResponse_stringPlugin {
	type: "stringPlugin";
	stringPlugin: StringPluginResponse;
}
export interface OntologyLmsResponse_actionTypeDescriptionGeneratorPlugin {
	type: "actionTypeDescriptionGeneratorPlugin";
	actionTypeDescriptionGeneratorPlugin: ActionTypeDescriptionGeneratorPluginResponse;
}
/**
* Union type for the outputs of the Ontology-LMS app
*/
export type OntologyLmsResponse = OntologyLmsResponse_stringPlugin | OntologyLmsResponse_actionTypeDescriptionGeneratorPlugin;
