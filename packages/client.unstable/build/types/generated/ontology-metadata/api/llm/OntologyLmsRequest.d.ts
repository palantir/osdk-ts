import type { ActionTypeDescriptionGeneratorPluginRequest } from "./ActionTypeDescriptionGeneratorPluginRequest.js";
import type { StringPluginRequest } from "./StringPluginRequest.js";
export interface OntologyLmsRequest_stringPlugin {
	type: "stringPlugin";
	stringPlugin: StringPluginRequest;
}
export interface OntologyLmsRequest_actionTypeDescriptionGeneratorPlugin {
	type: "actionTypeDescriptionGeneratorPlugin";
	actionTypeDescriptionGeneratorPlugin: ActionTypeDescriptionGeneratorPluginRequest;
}
/**
* Union wrapping the various plugins that we have for the Ontology LMS app.
* The plugin determines how we structure a prompt and validate the response.
*/
export type OntologyLmsRequest = OntologyLmsRequest_stringPlugin | OntologyLmsRequest_actionTypeDescriptionGeneratorPlugin;
