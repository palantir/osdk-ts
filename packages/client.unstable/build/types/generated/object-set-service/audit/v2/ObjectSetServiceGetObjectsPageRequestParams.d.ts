import type { Backend } from "../../api/Backend.js";
import type { GetObjectsPageRequest } from "../../api/GetObjectsPageRequest.js";
export interface ObjectSetServiceGetObjectsPageRequestParams {
	request: GetObjectsPageRequest;
	backend: Backend | undefined;
}
