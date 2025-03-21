import { type ConjureContext } from "conjure-lite";
import type { RegisterDependencyRequest } from "../RegisterDependencyRequest.js";
import type { RegisterDependencyResponse } from "../RegisterDependencyResponse.js";
/**
* Endpoint to register dependencies on ontology entities.
* Will overwrite any existing dependencies associated with the given application.
* Permissions required:
* - `ontology:register-dependency` on the root ontology rid
*/
export declare function registerDependency(ctx: ConjureContext, request: RegisterDependencyRequest): Promise<RegisterDependencyResponse>;
