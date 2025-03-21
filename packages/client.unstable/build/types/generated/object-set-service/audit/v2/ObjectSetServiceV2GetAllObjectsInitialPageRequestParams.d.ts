import type { Backend } from "../../api/Backend.js";
import type { GetAllObjectsInitialPageRequest } from "../../api/GetAllObjectsInitialPageRequest.js";
export interface ObjectSetServiceV2GetAllObjectsInitialPageRequestParams {
	request: GetAllObjectsInitialPageRequest;
	backend: Backend | undefined;
}
