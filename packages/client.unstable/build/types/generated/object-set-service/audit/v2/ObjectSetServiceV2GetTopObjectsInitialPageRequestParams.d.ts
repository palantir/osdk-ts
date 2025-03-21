import type { Backend } from "../../api/Backend.js";
import type { GetTopObjectsInitialPageRequest } from "../../api/GetTopObjectsInitialPageRequest.js";
export interface ObjectSetServiceV2GetTopObjectsInitialPageRequestParams {
	request: GetTopObjectsInitialPageRequest;
	backend: Backend | undefined;
}
