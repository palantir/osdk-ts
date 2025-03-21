import type { Backend } from "../../api/Backend.js";
import type { GetTopObjectsNextPageRequest } from "../../api/GetTopObjectsNextPageRequest.js";
export interface ObjectSetServiceV2GetTopObjectsNextPageRequestParams {
	request: GetTopObjectsNextPageRequest;
	backend: Backend | undefined;
}
