import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetAllObjectsInitialPageRequest } from "../GetAllObjectsInitialPageRequest.js";
import type { GetAllObjectsInitialPageResponse } from "../GetAllObjectsInitialPageResponse.js";
/**
* Returns an initial page of all `FoundryObject`s of an evaluated object set.
*
* Except for object types with streaming input datasources, this endpoint guarantees consistency and will throw if an
* inconsistency is detected.
*
* For object types with streaming input datasources, this endpoint does not guarantee consistency, and may or
* may not throw if an inconsistency is detected. In this case, frequent exceptions are expected and clients
* should use `getTopObjectsInitialPage` instead which will not throw across index changes.
*
* Consumers should confirm that the total number of received unique primary keys matches the value of
* the total number of results returned in response to the initial page request.
*/
export declare function getAllObjectsInitialPage(ctx: ConjureContext, request: GetAllObjectsInitialPageRequest, backend: Backend | undefined): Promise<GetAllObjectsInitialPageResponse>;
