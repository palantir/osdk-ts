import type { Backend } from "../../api/Backend.js";
import type { GetAllObjectsNextPageRequest } from "../../api/GetAllObjectsNextPageRequest.js";
export interface ObjectSetServiceV2GetAllObjectsNextPageRequestParams {
	request: GetAllObjectsNextPageRequest;
	backend: Backend | undefined;
}
