import type { DataScopeV2 } from "./DataScopeV2.js";
import type { ServerUrl } from "./ServerUrl.js";
/**
* A request to generate an OpenAPI specification against a particular set of ontology entities.
*/
export interface GenerateOpenApiRequest {
	serverUrl: ServerUrl | undefined;
	dataScope: DataScopeV2;
}
