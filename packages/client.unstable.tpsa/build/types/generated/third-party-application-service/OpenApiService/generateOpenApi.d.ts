import { type ConjureContext } from "conjure-lite";
import type { GenerateOpenApiRequest } from "../GenerateOpenApiRequest.js";
/**
* Generate an OpenAPI specification against the provided ontology entities.
* The result will be streamed back as bytes in yaml format.
*
* Requires third-party-application:generate-openapi on the service root node.
*/
export declare function generateOpenApi(ctx: ConjureContext, request: GenerateOpenApiRequest): Promise<Blob>;
