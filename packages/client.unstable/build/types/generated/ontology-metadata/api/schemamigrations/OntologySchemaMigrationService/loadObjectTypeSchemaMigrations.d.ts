import { type ConjureContext } from "conjure-lite";
import type { LoadObjectTypeSchemaMigrationsRequest } from "../LoadObjectTypeSchemaMigrationsRequest.js";
import type { LoadObjectTypeSchemaMigrationsResponse } from "../LoadObjectTypeSchemaMigrationsResponse.js";
/**
* Endpoint to page schema migrations for a given ObjectType at a given OntologyVersion. Requires viewer
* permissions on the ObjectType.
*/
export declare function loadObjectTypeSchemaMigrations(ctx: ConjureContext, request: LoadObjectTypeSchemaMigrationsRequest): Promise<LoadObjectTypeSchemaMigrationsResponse>;
